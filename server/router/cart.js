const express = require('express')
const db = require('../server/db')
const router = express.Router()

// 获取购物车商品列表
router.get('/goods',(req,res) => {
    let userId = req.query.id
    let cartGoodsList = []
    db.query(`SELECT * FROM cart_goods_list where user_id=${userId}`, [], 'search', function (res2) {
        if(res2.length>0){
            res2.forEach((item,index) => {
                db.query(`SELECT * FROM goods_list where id=${item.goods_id}`, [], 'search', function (res3) {
                    res3 = res3.map((item) => {
                        item.price = item.price.toFixed(2)
                        return item
                    })
                    item.goods = res3[0]
                    item.is_checked = item.is_checked==1?true:false
                    item.is_delete = item.is_delete==1?true:false
                    delete item.goods_id
                    cartGoodsList.push(item)
                    if(index == res2.length -1 ){
                        let t = setTimeout(()=>{
                            cartGoodsList.sort((a, b) => {
                                return b.cart_goods_id - a.cart_goods_id;
                            });
                            res.send({
                                code: 200,
                                message: 'success',
                                data:cartGoodsList
                            })
                            clearTimeout(t)
                        },200) 
                    }
                })
            });    
        }else{
            res.send({
                code: 200,
                message: 'success',
                data:[]
            })
        }
    })
})

// 添加商品到购物车
router.post('/goods/add',(req,res) => {
    let goodsId = req.body.goodsId
    let userId = req.body.userId
    let state = true
    db.query(`SELECT * FROM cart_goods_list`, [], 'search', function (res2) {
        res2.forEach(item => {
            if(item.goods_id==goodsId && item.user_id==userId){ //商品已经存在数量加1
                state = false
                db.query(`SELECT * FROM goods_list where id=${item.goods_id}`, [], 'search', function (res3) {
                    if(item.number==res3[0].stock){
                        res.send({
                            code: 404,
                            message: "库存不够了"
                        })
                    }else{
                        db.query(`UPDATE cart_goods_list SET number=${item.number+1} where cart_goods_id=${item.cart_goods_id}`, [], 'edit', function (res4) {
                            res.send({
                                code: 200,
                                message: "success"
                            })
                        })
                    }
                })  
            }
        })
        if(state){ //商品不存在加入购物车
            db.query(`INSERT INTO cart_goods_list(goods_id,user_id,is_checked,number) VALUES (${goodsId},${userId},0,1)`,[],'add',function(res3){
                res.send({
                    code: 200,
                    message: "success"
                })
            })
        }
    })
})

// 修改购物车中商品状态
router.put('/goods/checked',(req,res) => {
    let id = req.body.id
    if(id==true){ //全选
        db.query(`UPDATE cart_goods_list SET is_checked=${true}`, [], 'edit', function (res2) {
            res.send({
                code: 200,
                message: "success"
            })
        })
    }else if(id==false){ //全不选
        db.query(`UPDATE cart_goods_list SET is_checked=${false}`, [], 'edit', function (res2) {
            res.send({
                code: 200,
                message: "success"
            })
        })
    }else{ //单个修改状态
        db.query(`SELECT * FROM cart_goods_list where cart_goods_id=${id}`, [], 'search', function (res2) {
            db.query(`UPDATE cart_goods_list SET is_checked=${!res2[0].is_checked} where cart_goods_id=${id}`, [], 'edit', function (res3) {
                res.send({
                  code: 200,
                  message: "success"
                })
            })
        })
    }
})

// 修改购物车中商品的数量
router.put('/goods/number',(req,res) => {
    let data = req.body
    db.query(`SELECT * FROM cart_goods_list where cart_goods_id=${data.id}`, [], 'search', function (res2) {
        db.query(`SELECT * FROM goods_list where id=${res2[0].goods_id}`, [], 'search', function (res3) {
            if(data.number <= res3[0].stock){
                db.query(`UPDATE cart_goods_list SET number='${data.number}' where cart_goods_id=${data.id}`, [], 'edit', function (res4) {
                    res.send({
                      code: 200,
                      message: "success"
                    })
                })
            }else{
                res.send({
                    code: 404,
                    message: "数量不能超过该商品的库存！"
                })
            }
        })
    })
})

// 删除购物车中的商品
router.delete('/goods/delete',(req,res) => {
    let id = req.body.id
    db.query(`DELETE FROM cart_goods_list WHERE cart_goods_id=${id}`, [], 'delete', function (res2) {
        res.send({
            code: 200,
            message: "success"
        })
    })
})


module.exports = router