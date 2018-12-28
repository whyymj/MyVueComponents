var Mock = require('mockjs')
import * as express from 'express'
var router = express.Router()

let tmpOfTips = {
  "dragX|10-100": 0,
  "dragY": 0,
  "startX": 0,
  "startY": 0,
  "X": 0,
  "Y": 0
}

router.get('/UIDemos/getComponentTips', function(req, res, next) {
  res.send(Mock.mock(tmpOfTips))
})
export default router
