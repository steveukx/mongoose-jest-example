const {promiseResult} = require("@kwsites/promise-result");

jest.mock('../util/connection');

const {connect, close} = require('../util/connection');
const {create, findByName} = require('./products');

describe('products', function () {
   beforeAll(async () => {
      await connect();
   });

   afterAll(async () => {
      await close();
   });

   it('first', async () => {
      const result = await promiseResult(create({
         name: 'first',
         price: 100,
         description: 'added first',
      }));

      expect(result.threw).toBe(false);
   });

   it('second', async () => {
      const result = await promiseResult(create({
         name: 'second',
         price: 150,
         description: 'added second',
      }));

      expect(result.threw).toBe(false);
   });

   it('retrieve one', async () => {
      const {result} = await promiseResult(findByName('first'));

      expect(result).toEqual([
         expect.objectContaining({
            name: 'first',
            price: 100,
            description: 'added first',
         })
      ])
   });

   it('retrieve two', async () => {
      const {result} = await promiseResult(findByName('s'));

      expect(result).toEqual([
         expect.objectContaining({
            name: 'first',
            price: 100,
            description: 'added first',
         }),
         expect.objectContaining({
            name: 'second',
            price: 150,
            description: 'added second',
         }),
      ])
   });

});