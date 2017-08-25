/**
 * Created by shao_ on 2017/8/25.
 */

const manifest =  require('./dist/vue-ssr-client-manifest.json')

const {createBundleRenderer} = require('vue-server-renderer')

const template = require('fs').readFileSync('./index.template.html', 'utf-8')

const bundle = require('./dist/vue-ssr-server-bundle.json')


const express = require('express')


var server = express()

server.use('/dist',express.static('./dist'))

const renderer = createBundleRenderer(bundle, {
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    clientManifest: manifest
})


// 在服务器处理函数中……
server.get('*', (req, res) => {
    const context = {
        url:req.url,
        title: 'test',
        meta: `
           <meta charset="utf-8"/>
           <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
        `
    }

    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
    // 现在我们的服务器与应用程序已经解耦！
    renderer.renderToString(context, (err, html) => {
        if(err){
            res.status(500).end('Internal Server Error')
            return
        }else{
            res.end(html)
        }


    })
})

server.listen(3000)