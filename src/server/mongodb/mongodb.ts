import {AnyTxtRecord} from "dns";

let mongodb = require('mongodb').MongoClient;
/**
 * 该类用于连接mongodb，
 */
export class DBController {
    protected DB_Url : string; //数据库地址
    public DB : any; //数据库
    public Collection : any; //数据库表
    constructor(url : string) {
        this.DB_Url = url;
    };
    /**
 * 连接成功后返回数据库连接对象
 * @param dburl mongodb数据库地址，
 */

    getDB(dbname : string) {
        const that = this;
        return new Promise((resolve, reject) => {
            mongodb.connect(that.DB_Url, (err : any, client : any) => {
                if (err) {
                    reject(err)
                }
                that.DB = client.db(dbname)
                resolve(that.DB);

            });
        })

    };
    /**
 *
 * @param name 数据库名
 */
    getCollection(collectionname : string) {
        let that = this;
        if (this.DB) {
            this.Collection = this
                .DB
                .collection(collectionname);
        }

        return new Promise(resolve => {
            resolve(that.Collection);
        })
    };
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
