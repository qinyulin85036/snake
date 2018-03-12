module.exports = {
    //入口文件
    entry:'./js/index.js',

    //出口文件
    output:{
        path:__dirname + "/dist",
        filename:'bundle.js'
    },   
    //需要依赖的插件或者是装载器
    module:{
        rules:[
            {test:/\.css$/,loader:"style-loader!css-loader"}
        ]
    }
}