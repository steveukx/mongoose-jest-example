
module.exports = {
   async connect () {
      throw new Error('Implement the real mongo connection here, tests use the fixture');
   },

   async close () {
      throw new Error('Implement the real mongo disconnection here, tests use the fixture');
   }
}