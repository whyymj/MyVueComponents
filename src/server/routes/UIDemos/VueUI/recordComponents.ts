import {DBController} from '../../../mongodb/mongodb';
import * as express from 'express';
var router = express.Router();
class RecordComps extends DBController {
    private DB_Name : string = '';
    private Collection_Name : string = '';

    constructor(url : string, dbname : string, collectionname : string) {
        super(url);
        this.DB_Name = dbname;
        this.Collection_Name = collectionname;
    }
    private async getCompRecord() { //获取集合

        await this.getDB(this.DB_Name);
        return new Promise < object[] > (async(resolve, reject) => {
            let menu : any = await this.getCollection(this.Collection_Name);

            resolve(menu)
        })
    }
    private async insertComponent() { //插入一个自定义组件
        await this.getCompRecord();
        
    }

}
let myMenu = new RecordComps('mongodb://localhost:27017', 'myVueDB', 'UIDemos');

router.get('/menu', async(req, res, next) => {
    console.log('object')
    myMenu.close();
})
export default router;
