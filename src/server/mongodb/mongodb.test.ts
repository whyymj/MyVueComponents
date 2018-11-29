import {DBController} from './mongodb'

/**
 * 使用测试
 */
async function getMenu() {
    let collection = new DBController('mongodb://localhost:27017');
    let db : any = await collection.getDB('myVueDB')
    let cols : any = await collection.getCollection('Menu')
    return new Promise((resolve, reject) => {
        cols
            .find()
            .toArray((err : Error, res : any[]) => {
                collection.close();
                resolve(res)
            })
    })
}

test('getMenu should get json', async() => {
    expect(typeof await getMenu()).toBe('object')
})