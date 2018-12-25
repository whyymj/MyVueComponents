"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("../../../mongodb/mongodb");
const express = __importStar(require("express"));
var router = express.Router();
class RecordComps extends mongodb_1.DBController {
    constructor(url, dbname, collectionname) {
        super(url);
        this.DB_Name = '';
        this.Collection_Name = '';
        this.DB_Name = dbname;
        this.Collection_Name = collectionname;
    }
    getCompRecord() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getDB(this.DB_Name);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let menu = yield this.getCollection(this.Collection_Name);
                resolve(menu);
            }));
        });
    }
    insertComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCompRecord();
        });
    }
}
let myMenu = new RecordComps('mongodb://localhost:27017', 'myVueDB', 'UIDemos');
router.get('/menu', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log('object');
    myMenu.close();
}));
exports.default = router;
//# sourceMappingURL=recordComponents.js.map