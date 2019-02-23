const { mongodb: { url } } = require('../config')

const mongoose = require('mongoose')
mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

exports.todos = mongoose.model('todos', {
  id: { type: Number },
  text: { type: String },
}, 'todos')

