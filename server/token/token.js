var jwt = require('jsonwebtoken');
var jwtScrect = 'xinxin733';  //签名

//登录接口 生成token的方法
var setToken = function (username, password) {
    return new Promise((resolve, reject) => {
        const rule = {//传入需要解析的值
            username,
            password
        }
         //rule传入需要解析的值,expiresln 设置token过期的时间
        const tokenObj={
            accessToken:jwt.sign(rule, jwtScrect, { expiresIn: '1h' }),
            refreshToken:jwt.sign(rule, jwtScrect, { expiresIn: '2h' })
        }
        resolve(tokenObj)
    })
}
//各个接口需要验证token的方法
var getToken = function (token) {
    return new Promise((resolve, reject) => {
        if (!token) {
            console.log('token是空的')
            reject({
                error: 'token 是空的'
            })
        }
        else {
            var info = jwt.verify(token.split(' ')[1], jwtScrect);
            // iat:签发时间   exp:过期时间
            // 当前时间戳
            // let date = Math.round(new Date().getTime()/1000).toString()
            resolve(info);  //解析返回的值（sign 传入的值）
        }
    })
}

module.exports = {
    setToken,
    getToken
}