const express = require('express')
const db = require('../server/db')
const { json } = require('body-parser')
const router = express.Router()

// 获取订单列表
router.get('/list', (req,res) => {
    let userId = req.query.userId
    db.query(`SELECT * FROM order_list where user_id=${userId}&&is_delete=${0}`, [], 'search', function (res2) {
        res2.sort((a, b) => {
            return b.id - a.id;
        });
        res.send({
            code: 200,
            message: 'success',
            data: res2
        })
    })
})

// 创建订单
router.post('/create', (req,res) => {
    let data =  req.body
    data.order_code = Date.now()
    data.status = 1
    data.pay_type = null
    data.pay_time = null
    data.is_delete = 0
    data.trade_no = 0
    data.ordergoods_set = JSON.stringify(data.ordergoods_set)
    db.query(`INSERT INTO order_list SET ?`,data,'add',function(res2){
        db.query(`DELETE FROM cart_goods_list`, [], 'delete', function (res3) {
            res.send({
                code: 200,
                message: 'success',
                data:data
            })
        })
    })
})

// 取消订单
router.put('/close',(req,res) => {
   let id = req.body.id
   db.query(`UPDATE order_list SET is_delete=1 where id=${id}`, [], 'edit', function (res2) {
    res.send({
      code: 200,
      message: "取消成功"
    })
  })
})

// 添加支付信息
router.post('/pay',(req,res)=>{
    let data =  req.body
    db.query(`UPDATE order_list SET pay_type=${data.payType},pay_time=NOW(),status=2 where order_code=${data.id}`, [], 'edit', function (res2) {
        res.send({
            code: 200,
            message: "支付成功"
        })
    })
})


module.exports = router