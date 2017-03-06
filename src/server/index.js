const express = require('express')
const app = express()
const VueSSR = require('vue-ssr')

// webpack server-side bundle config
const webpackServer = require('../../webpack.server.config.js')

// create a project renderer
app.get('*', function (req, res) {
  const indexRenderer = new VueSSR({
    projectName: 'index',
    webpackServer
  })

  indexRenderer.render(req, res, `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Cov-X</title>
        {{ STYLE }}
      </head>
      <body>
        {{ APP }}
        <script src="/dist/client-bundle.js"></script>
      </body>
    </html>
    `)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
