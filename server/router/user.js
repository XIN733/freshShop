const express = require('express')
const db = require('../server/db')
const router = express.Router()
const upload = require('../multer/upload')
const sendSms = require('../sms/sms')
var vertoken = require('../token/token')
// 获取数据库用户列表
let userList = '';
let userInfo = {};

// 用户注册
router.post('/register', (req, res) => {
  db.query('SELECT * FROM user_list', [], 'search', function (res2) {
    userList = res2
    let data = req.body
    let status = true
    userList.forEach((item) => {
      if (data.username == item.username) {
        status = false
      }
    })
    if (status) {
      db.query('INSERT INTO user_list SET ?', data, 'add', function () {
        res.send({
          code: 200,
          message: "注册成功"
        })
      })
    } else {
      res.send({
        code: 404,
        message: "用户名已存在",
      })
    }
  })
})

// 用户登录
router.post('/login', (req, res) => {
  db.query('SELECT * FROM user_list', [], 'search', function (res2) {
    userList = res2
    let data = req.body
    let status = false
    userList.forEach((item) => {
      if (data.username == item.username && data.password == item.password) {
        status = true
        userInfo = {
          username: item.username,
          userId: item.user_id,
          email: item.email,
          mobile: item.mobile,
          accessToken: '',
          refreshToken: ''
        }
      }
    })
    if (status) {
      //调用生成token的方法
      vertoken.setToken(data).then(tokenObj => {
        //前端获取token后存储在localStroage中,
        //**调用接口时 设置axios(ajax)请求头Authorization的格式为`Bearer ` +token
        db.query(`update user_list set accessToken='${tokenObj.accessToken}',refreshToken='${tokenObj.refreshToken}' where user_id=${userInfo.userId}`, [], 'edit', function (res3) {
          userInfo.accessToken = tokenObj.accessToken
          userInfo.refreshToken = tokenObj.refreshToken
          res.send({
            code: 200,
            message: "登录成功",
            data: userInfo
          })
        })
      })
    } else {
      res.send({
        code: 404,
        message: "该用户不存在",
      })
    }
  })
})

// 获取用户信息
router.get('/getUserInfo', (req, res) => {
  let id = req.query.id
  db.query(`SELECT * FROM user_list where user_id='${id}'`, [], 'search', function (res2) {
    let data = {
      'id': res2[0].user_id,
      'username': res2[0].username,
      'email': res2[0].email,
      'mobile': res2[0].mobile,
      'avatar': res2[0].avatar_url,
      'nickname': res2[0].nickname
    }
    res.send({
      code: 200,
      message: "success",
      data: data
    })
  })
})

// 检查token过期时间
router.post('/checkToken', (req, res) => {
  let tokenExp = req.token.exp
  let currentTime = Math.round(new Date().getTime() / 1000).toString()
  if (tokenExp - currentTime <= 0) { //token过期
    res.send({
      code: 401,
      message: "token过期，请重新登录",
    })
  } else {
    res.send({
      code: 200,
      message: "token未过期",
    })
  }
})

// 刷新token
router.post('/refreshToken', (req, res) => {
  let id = req.body.id
  db.query(`SELECT * FROM user_list where user_id='${id}'`, [], 'search', function (res2) {
    let data = {
      'username': res2[0].username,
      'password': res2[0].password
    }
    vertoken.setToken(data).then(tokenObj => {
      db.query(`update user_list set accessToken='${tokenObj.accessToken}',refreshToken='${tokenObj.refreshToken}' where user_id=${id}`, [], 'edit', function (res3) {
        res.send({
          code: 200,
          message: "success",
          data: {
            'accessToken': tokenObj.accessToken,
            'refreshToken': tokenObj.refreshToken
          }
        })
      })
    })
  })
})

// 上传头像
router.post('/avatar/upload', (req, res) => {
  upload(req, res).then(imgsrc => {
    let id = req.body.userId
    db.query(`UPDATE user_list SET avatar_url='${imgsrc}' where user_id=${id}`, [], 'edit', function (res2) {
      res.send({
        data: imgsrc,
        code: 200,
        message: "上传成功"
      })
    })
  }).catch(err => {
    res.send({
      code: 404,
      message: err.error
    })
  })
})

// 绑定手机号
router.put('/mobile/bind', (req, res) => {
  let data = req.body
  let regMobile = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  if (!data.mobile) {
    res.send({
      code: 404,
      message: "手机号不能为空"
    })
  } else if (!regMobile.test(data.mobile)) {
    res.send({
      code: 404,
      message: "手机号格式错误"
    })
  } else if (!data.code) {
    res.send({
      code: 404,
      message: "验证码不能为空"
    })
  } else if (data.isExpires) {
    res.send({
      code: 404,
      message: "验证码过期，请重新获取"
    })
  } else if (data.code !== data.code_confirmation) {
    res.send({
      code: 404,
      message: "验证码错误"
    })
  } else {
    db.query('SELECT * FROM user_list', [], 'search', function (res2) {
      let userList = res2
      let status = true
      userList.forEach((item) => {
        if (item.mobile == data.mobile) {
          status = false
        }
      })
      if (status) {
        db.query(`UPDATE user_list SET mobile='${data.mobile}' where user_id=${data.userId}`, [], 'edit', function (res3) {
          res.send({
            code: 200,
            message: "绑定成功"
          })
        })
      } else {
        res.send({
          code: 404,
          message: "该手机号已被其他用户绑定"
        })
      }
    })
  }
})

// 解绑手机号
router.put('/mobile/unbind', (req, res) => {
  let data = req.body
  if (!data.code) {
    res.send({
      code: 404,
      message: "验证码不能为空"
    })
  } else if (data.isExpires) {
    res.send({
      code: 404,
      message: "验证码过期，请重新获取"
    })
  } else if (data.code !== data.code_confirmation) {
    res.send({
      code: 404,
      message: "验证码错误"
    })
  } else {
    db.query(`UPDATE user_list SET mobile='' where user_id=${data.userId}`, [], 'edit', function (res2) {
      res.send({
        code: 200,
        message: "解绑成功"
      })
    })
  }
})

// 修改用户昵称
router.put('/setNickname', (req, res) => {
  let data = req.body
  db.query(`UPDATE user_list SET nickname='${data.nickname}' where user_id=${data.userId}`, [], 'edit', function (res2) {
    res.send({
      code: 200,
      message: "保存成功"
    })
  })
})

// 修改用户邮箱
router.put('/setEmail', (req, res) => {
  let data = req.body
  let regEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (!data.email) {
    res.send({
      code: 404,
      message: "邮箱不能为空"
    })
  } else if (!regEmail.test(data.email)) {
    res.send({
      code: 404,
      message: "邮箱格式错误"
    })
  } else {
    db.query('SELECT * FROM user_list', [], 'search', function (res2) { //遍历邮箱是否被绑定
      let userList = res2
      let status = true
      userList.forEach((item) => {
        if (item.email == data.email) {
          status = false
        }
      })
      if (status) {
        db.query(`UPDATE user_list SET email='${data.email}' where user_id=${data.userId}`, [], 'edit', function (res3) {
          res.send({
            code: 200,
            message: "保存成功"
          })
        })
      } else {
        res.send({
          code: 404,
          message: "该邮箱已被其他用户绑定"
        })
      }
    })
  }
})

// 修改用户密码
router.put('/setPassword', (req, res) => {
  let data = req.body
  if (!data.password) {
    res.send({
      code: 404,
      message: '新密码不能为空'
    })
  } else if (!data.password_confirmation) {
    res.send({
      code: 404,
      message: '确认密码不能为空'
    })
  } else if (data.password !== data.password_confirmation) {
    res.send({
      code: 404,
      message: '密码不一致'
    })
  } else if (!data.code) {
    res.send({
      code: 404,
      message: '验证码不能为空'
    })
  } else if (data.isExpires) {
    res.send({
      code: 404,
      message: '验证码过期，请重新获取'
    })
  } else if (data.code !== data.code_confirmation) {
    res.send({
      code: 404,
      message: '验证码错误'
    })
  } else {
    db.query(`UPDATE user_list SET password='${data.password}' where user_id=${data.userId}`, [], 'edit', function (res2) {
      res.send({
        code: 200,
        message: "修改成功"
      })
    })
  }
})

// 发送短信验证码
router.post('/sendSms', (req, res) => {
  sendSms(req, res).then(result => {
    let { Code, Message, SessionContext } = result.SendStatusSet[0]
    if (Code == 'Ok') {
      res.send({
        code: 200,
        message: "发送成功，注意查收",
        sms: SessionContext
      })
    } else {
      res.send({
        code: 404,
        message: Message == 'incorrect number format' ? '手机号格式错误' : Message
      })
    }
  }).catch(err => {
    res.send({
      code: 404,
      message: err.error
    })
  })
})

// 获取收货地址列表
router.get('/address/list', (req, res) => {
  let id = req.query.id
  db.query(`SELECT * FROM user_shipping_address where user_id=${id}`, [], 'search', function (res2) {
    res2 = res2.map(item => {
      item.is_default = item.is_default == 1 ? true : false
      delete item.create_time
      delete item.update_time
      return item
    })
    res.send({
      code: 200,
      message: 'success',
      data: res2
    })
  })
})

// 获取省份
router.get('/area/province', (req, res) => {
  db.query(`SELECT * FROM area where level=1`, [], 'search', function (res2) {
    res2 = res2.map(item => {
      return { name: item.name, pid: item.id }
    })
    res.send({
      code: 200,
      message: 'success',
      data: res2
    })
  })
})

// 获取选中省份下的所有市
router.get('/area/city', (req, res) => {
  let provinceId = req.query.provinceId
  db.query(`SELECT * FROM area where pid=${provinceId}&&level=2`, [], 'search', function (res2) {
    res2 = res2.map(item => {
      return { name: item.name, cid: item.id }
    })
    res.send({
      code: 200,
      message: 'success',
      data: res2
    })
  })
})

// 获取选中市下的所有区县
router.get('/area/county', (req, res) => {
  let cityId = req.query.cityId
  db.query(`SELECT * FROM area where pid=${cityId}&&level=3`, [], 'search', function (res2) {
    res2 = res2.map(item => {
      return { name: item.name, yzid: item.id }
    })
    res.send({
      code: 200,
      message: 'success',
      data: res2
    })
  })
})

// 修改收货地址
router.put('/address/edit', (req, res) => {
  let data = req.body
  if (data.is_default) {
    db.query(`UPDATE user_shipping_address SET is_default=0 where user_id=${data.user_id}`, [], 'edit', function (res2) {
      db.query(`UPDATE user_shipping_address SET name='${data.name}',mobile='${data.mobile}',address='${data.address}',county='${data.county}',county_id='${data.county_id}',
      city='${data.city}',city_id='${data.city_id}',province='${data.province}',province_id='${data.province_id}',is_default=${data.is_default ? 1 : 0} where id=${data.id}`, [], 'edit', function (res3) {
        res.send({
          code: 200,
          message: "修改成功"
        })
      })
    })
  } else {
    db.query(`UPDATE user_shipping_address SET name='${data.name}',mobile='${data.mobile}',address='${data.address}',county='${data.county}',county_id='${data.county_id}',
     city='${data.city}',city_id='${data.city_id}',province='${data.province}',province_id='${data.province_id}',is_default=${data.is_default ? 1 : 0} where id=${data.id}`, [], 'edit', function (res3) {
      res.send({
        code: 200,
        message: "修改成功"
      })
    })   
  }
})

// 添加收货地址
router.post('/address/add', (req, res) => {
  let data = req.body.data
  if (data.is_default) {
    db.query(`UPDATE user_shipping_address SET is_default=0 where user_id=${data.user_id}`, [], 'edit', function (res2) {
      db.query('INSERT INTO user_shipping_address SET ?', data, 'add', function () {
        res.send({
          code: 200,
          message: "添加成功"
        })
      })
    })
  }else{
    db.query('INSERT INTO user_shipping_address SET ?', data, 'add', function () {
      res.send({
        code: 200,
        message: "添加成功"
      })
    })
  }
})

// 删除收货地址
router.delete('/address/del',(req,res) => {
  let id = req.body.id
  db.query(`DELETE FROM user_shipping_address WHERE id=${id}`, [], 'delete', function (res2) {
      res.send({
          code: 200,
          message: "success"
      })
  })
})


module.exports = router