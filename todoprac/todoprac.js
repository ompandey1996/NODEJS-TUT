let express = require('express')
let app = express()
let ejs = require('ejs')
let bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))

let Listitems = []
app.get('/', (req, resp) => {
  resp.render('list.ejs', { ListItems: Listitems })
})

app.post('/', (req, resp) => {
  let listitem = req.body.inputfield
  Listitems.push(listitem)
  resp.redirect('/')
})
app.listen(5000)
