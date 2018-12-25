import axios from 'axios'
async function getMenu() {
  return axios.get('http://localhost:8080/UIindex/UIDemosMenu/menu')
}
async function getTips() {
  return axios.get('http://localhost:8080/UIindex/api/UIDemos/getComponentTips')
  
 
}
test('getMenu should get json', async () => {
  expect(typeof (await getMenu())).toBe('object')
})
test('test  should get json', async () => {
  expect(typeof (await getTips())).toBe('object')
})
