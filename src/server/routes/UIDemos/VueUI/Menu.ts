import {DBController} from '../../../mongodb/mongodb';
import * as express from 'express';
var router = express.Router();
class Menu extends DBController {
    private DB_Name : string = '';
    private Collection_Name : string = '';

    constructor(url : string, dbname : string, collectionname : string) {
        super(url);
        this.DB_Name = dbname;
        this.Collection_Name = collectionname;
    }
    public async getMenu() {
        await this.getDB(this.DB_Name);

        return new Promise < object[] > (async(resolve, reject) => {
            let menu : any = await this.getCollection(this.Collection_Name);
            menu
                .find()
                .sort({"id": 1})
                .toArray((err : any, arr : object[]) => {
                    resolve(arr)
                })

        })
    }
}

let myMenu = new Menu('mongodb://localhost:27017', 'myVueDB', 'Menu');
router.get('/menu', async(req, res, next) => {
    res.send(await myMenu.getMenu())
    myMenu.close();
})
export default router;