const multer = require('multer')
// 引入md5是为了给图片编码，确保唯一性，可酌情去除
const md5 = require('md5')
//引入工具
const path = require('path')
const resolve = (dir) => {
    return path.join(__dirname, './', dir)
}
//multer的配置对象
let storage = multer.diskStorage({
    //存储路径
    destination: function (req, file, cb) {
        // 允许图片上传 png、jpg
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, resolve('../public/images/upFile/'))
        } else {
        // 限制其他文件上传类型
            cb({ error: 'Mime type not supported' })
        }
    },
    // 存储名称
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null, md5(+new Date()) + "." + fileFormat[fileFormat.length - 1]);
    }
});
// 添加配置
const multerConfig = multer({
    storage: storage
});

// 导出配置好的multerConfig
module.exports = multerConfig;