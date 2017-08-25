/**
 * Created by shao_ on 2017/8/25.
 */
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
      <!DOCTYPE html>
      <html lang="zh">
        <head>
            <title>Hello</title>
            <meta charset='utf-8'>
        </head>
        <body>${html}</body>
      </html>
    `)
    })
})
server.listen(3000)