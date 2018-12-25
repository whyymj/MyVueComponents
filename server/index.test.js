"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default.get('http://localhost:8080/UIindex/UIDemosMenu/menu');
    });
}
function getTips() {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default.get('http://localhost:8080/UIindex/api/UIDemos/getComponentTips');
    });
}
test('getMenu should get json', () => __awaiter(this, void 0, void 0, function* () {
    expect(typeof (yield getMenu())).toBe('object');
}));
test('test  should get json', () => __awaiter(this, void 0, void 0, function* () {
    expect(typeof (yield getTips())).toBe('object');
}));
//# sourceMappingURL=index.test.js.map