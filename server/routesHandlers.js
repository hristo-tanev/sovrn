let checkAndConvert = require('../utils')
let Numeral = require('../models/Numeral')

module.exports = {
  toArabic: function(request, response, next) {
    let { number } = request.params
    checkAndConvert(response, 'roman', number)

    return next()
  },

  toRoman: function(request, response, next) {
    let { number } = request.params
    checkAndConvert(response, 'arabic', number)

    return next()
  },

  getAllByType: function(request, response, next) {
    let { numeralType } = request.params
    if (numeralType == 'roman' || numeralType == 'arabic') {
      Numeral.find({ type: numeralType }, (error, numerals) => {
        if (error) {
          response.send(400)
        }

        response.json({ all: numerals })
      })
    } else {
      response.send(400)
    }

    return next()
  },

  removeAll: function(request, response, next) {
    Numeral.remove({}, (error, numerals) => {
      if (error || numerals.result.n == 0) {
        response.send(500)
      } else {
        response.send(200)
      }
    })

    return next()
  }
}
