"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongodb = require('mongodb').MongoClient;
/**
 * 该类用于连接mongodb，
 */
class DBController {
    constructor(url) {
        this.DB_Url = url;
    }
    ;
    /**
 * 连接成功后返回数据库连接对象
 * @param dburl mongodb数据库地址，
 */
    getDB(dbname) {
        const that = this;
        return new Promise((resolve, reject) => {
            mongodb.connect(that.DB_Url, (err, client) => {
                if (err) {
                    reject(err);
                }
                that.DB = client.db(dbname);
                resolve(that.DB);
            });
        });
    }
    ;
    /**
 *
 * @param name 数据库名
 */
    getCollection(collectionname) {
        let that = this;
        if (this.DB) {
            this.Collection = this
                .DB
                .collection(collectionname);
        }
        return new Promise(resolve => {
            resolve(that.Collection);
        });
    }
    ;
    /**
 * 关闭数据库
 */
    close() {
        let that = this;
        if (this.DB && this.DB.close) {
            this
                .DB
                .close();
        }
    }
}
exports.DBController = DBController;
//# sourceMappingURL=mongodb.js.map