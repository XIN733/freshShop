const express = require('express')
const db = require('../server/db')
const router = express.Router()

// 获取商城首页数据
router.get('/index', (req, res) => {
    let banner = []
    let goods = []
    let group = []
    db.query('SELECT * FROM goods_slideshow where status=1', [], 'search', function (res2) {
        banner = res2.map((item) => {
            item.status = true
            return item
        })
        db.query('SELECT * FROM goods_list where recommend=1 && status=1', [], 'search', function (res3) {
            goods = res3.map((item) => {
                item.recommend = true
                item.status = true
                item.price = item.price.toFixed(2)
                return item
            })
            db.query('SELECT * FROM goods_group where status=1', [], 'search', function (res4) {
                group = res4.map((item) => {
                    item.status = item.status = true
                    return item
                })
                res.send({
                    code: 200,
                    message: 'success',
                    data: {
                        banner,
                        goods,
                        group
                    }
                })
            })
        })
    })
})

// 根据商品分类获取商品列表
router.get('/list', (req, res) => {
    let groupId = req.query.groupId
    let page = req.query.page
    let pageSize = req.query.pageSize
    let allPage = 1
    let goodsList = []
    db.query(`SELECT * FROM goods_list where status=1`, [], 'search', function (res2) {
        if(groupId){
            res2.forEach(element => {
                if (element.group == groupId) {
                    element.price = element.price.toFixed(2)
                    goodsList.push(element)
                }
            });
        }else{
            goodsList = res2.map((item) => {
                item.price = item.price.toFixed(2)
                return item
            })
        }
        if(goodsList.length>pageSize){
            allPage = Math.ceil(goodsList.length/pageSize) 
            goodsList = goodsList.splice((page-1)*pageSize,pageSize) 
        }
        res.send({
            code: 200,
            message: 'success',
            data:{
                list:goodsList,
                allPage
            } 
        })
    })
})

// 获取商品详情
router.get('/detail', (req, res) => {
    let id = req.query.id
    db.query(`SELECT * FROM goods_list where id=${id}`, [], 'search', function (res2) {
        let goods = res2.map((item) => {
            item.recommend = true
            item.status = true
            item.price = item.price.toFixed(2)
            return item
        })
        db.query(`SELECT * FROM goods_detail where name='${goods[0].title}'`, [], 'search', function (res3) {
            let detail = res3.map((item) => {
                delete item.id
                delete item.name
                return item
            })
            goods[0].detail = detail[0]
            res.send({
                code: 200,
                message: 'success',
                data: goods[0]
            })
        })
    })
})

// 收藏商品
router.post('/collect',(req,res)=>{
    let goodsId = req.body.goodsId
    let userId = req.body.userId
    db.query(`INSERT INTO goods_collectible(user_id,goods_id) VALUES (${userId},${goodsId})`,[],'add',function(res2){
        res.send({
            code: 200,
            message: "success"
        })
    })
})

// 取消收藏 
router.delete('/collect/cancel',(req,res)=>{
    let goodsId = req.body.goodsId
    let userId = req.body.userId
    db.query(`DELETE FROM goods_collectible WHERE user_id=${userId}&&goods_id=${goodsId}`, [], 'delete', function (res2) {
        res.send({
            code: 200,
            message: "success"
        })
    })
})

// 获取收藏列表
router.get('/collect/list',(req,res)=>{
    let userId = req.query.userId
    db.query(`SELECT * FROM goods_collectible where user_id=${userId}`, [], 'search', function (res2) {
        if(res2.length>0){
            db.query(`SELECT * FROM goods_list `, [], 'search', function (res3) {
                res2.forEach((collect,index) => {
                    res3.forEach((goods)=>{
                        if(collect.goods_id==goods.id){
                            collect.goods = goods
                            if(index==res2.length-1){
                               res.send({
                                    code: 200,
                                    data:res2,
                                    message: "success"
                                })
                            }
                        }
                    })
                })
            })  
        }else{
            res.send({
                code: 200,
                data:res2,
                message: "success"
            })
        }
    })
})

// 获取商品分类
router.get('/group', (req, res) => {
    db.query('SELECT * FROM goods_group where status=1', [], 'search', function (res2) {
        res.send({
            code: 200,
            message: 'success',
            data: res2
        })
    })
})

// 搜索商品
router.get('/searchGoods',(req,res) => {
    let name = req.query.name
    let status = false
    let goodsList = []
    db.query('SELECT * FROM goods_list', [], 'search', function (res2) {
        res2.forEach(element => {
            if(element.title.indexOf(name)>-1&&element.status==1){
                goodsList.push(element)
                status=true
            }
        });
        if(status){
            res.send({
                code: 200,
                message: 'success',
                data: goodsList
            })
        }else{
            res.send({
                code: 404,
                message: "商品不存在",
            })
        }
    })
})

module.exports = router