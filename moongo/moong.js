let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/products')
let ElectronicSchema = new mongoose.Schema({
  name: 'String',
  model: 'String',
  color: 'String'
})
const main = async () => {
  let ElectronicModel = mongoose.model('electronics', ElectronicSchema)
  let data = new ElectronicModel({
    name: 'bmw',
    model: 'i11',
    color: 'black'
  })
  let result = await data.save()
  console.log(result)
}
main()
const update = async () => {
  let electronicmodel = mongoose.model('electronics', ElectronicSchema)
  let data = await electronicmodel.updateOne(
    { name: 'bmw' },
    { $set: { name: 'juha' } }
  )
  console.log(data)
}
update()
const del = async () => {
  let elecmodel = mongoose.model('elecmodel', ElectronicSchema)
  let data = elecmodel.deleteOne({ name: 'juha' })
  console.log(` the data is ${data}`)
}
del()
