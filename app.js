const express = require ('express'),
  path = require ('path')
;

const app = express ()

app.use (express.static (path.join (__dirname, 'public')))

app.listen (7070, () => {
  console.log ('server started at port 7070')
})
