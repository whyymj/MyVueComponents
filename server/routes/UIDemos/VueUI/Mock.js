"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Mock = require('mockjs');
const express = __importStar(require("express"));
var router = express.Router();
let tmpOfTips = {
    "dragX|10-100": 0,
    "dragY": 0,
    "startX": 0,
    "startY": 0,
    "X": 0,
    "Y": 0
};
router.get('/UIDemos/getComponentTips', function (req, res, next) { 
    res.send(Mock.mock(tmpOfTips));
});
exports.default = router;
//# sourceMappingURL=Mock.js.map