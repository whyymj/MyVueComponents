"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("./mongodb");
/**
 * 使用测试
 */
function getMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        let collection = new mongodb_1.DBController('mongodb://localhost:27017');
        let db = yield collection.getDB('myVueDB');
        let cols = yield collection.getCollection('Menu');
        return new Promise((resolve, reject) => {
            cols
                .find()
                .toArray((err, res) => {
                collection.close();
                resolve(res);
            });
        });
    });
}
test('getMenu should get json', () => __awaiter(this, void 0, void 0, function* () {
    expect(typeof (yield getMenu())).toBe('object');
}));
//# sourceMappingURL=mongodb.test.js.map