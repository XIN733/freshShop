const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

/* 挂载处理post请求的插件 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* 跨域处理 */
const cors = require('cors'); //引入cors库
const corsOptions = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':'Content-Type,Authorization,X-Requested-With',
  'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
  // 'Content-Type':'application/json;charset=utf-8'
}
app.use(cors(corsOptions))

/* 服务器存储 */
const session = require('express-session');
app.use(session({
  secret: 'this is session', //服务器端生成 session 的签名
  //   name:"node", //修改session对应cookie的名称
  resave: false, //强制保存 session 即使它并没有变化
  saveUninitialized: true, //强制将未初始化的 session 存储
  cookie: {
    maxAge: 1000 * 60 * 60 * 2, //2小时后过期
    secure: false  // true 表示只有https协议才能访问cookie  
  },
  rolling: true  //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
}))

/* 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了 */
app.use('/public', express.static(path.join(__dirname, 'public')));

/* token处理 */
var vertoken = require('./token/token');
const { expressjwt } = require('express-jwt');
//验证token是否过期并规定那些路由不需要验证
app.use(expressjwt({
  secret: 'xinxin733',
  algorithms: ['HS256']// 算法
}).unless({
  path: ['/user/register', '/user/login','user/user', '/goods/index','/order/list']  //不需要验证的接口名称
}))
//解析token获取用户信息
app.use(function (req, res, next) {
  var token = req.headers['authorization'];
  if (token == undefined) {
     next();
  } else {
      vertoken.getToken(token).then((data) => {
          req.token = data;
          next();
      }).catch((error) => {
          next();
      })
  }
});
//token失效返回信息
app.use(function (err, req, res, next) {
  if (err.status == 401) {
    return res.send({ code: 401, message: 'token过期，请重新登录' })
  }
})


/* 路由模块化拆分 */
const router = require('./router/router');
app.use(router);


// 监听端口号，启动web服务
app.listen(3000, (error) => {
  if (error) {
    console.log('服务器启动失败：' + error)
  } else {
    console.log('服务器启动成功，访问：http://localhost:3000')
  }
});



