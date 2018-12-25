"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
var router = express.Router();
const Menu_1 = __importDefault(require("./VueUI/Menu"));
const Mock_1 = __importDefault(require("./VueUI/Mock"));
router.use('/UIDemosMenu', Menu_1.default);
router.use('/UIDemosRecords', Mock_1.default);
// router.use('/UIDemosTip',tip);
// router.use('/UIDemosComponent',comps);
module.exports = router;
//# sourceMappingURL=index.js.map