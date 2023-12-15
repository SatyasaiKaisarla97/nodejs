const path = require('path')
const rootDir = require('../util/path')

exports.contacUs =  (req, res, next) => {
    res.sendFile(path.join(rootDir, '.', 'views', 'contact.html'));
  }

exports.success = (req, res, next) => {
   res.send('<h1>success</h1>')
  }
