const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

module.exports = {
   async connect () {
      await mongod.start();
      const mongooseOpts = {
         dbName: 'foo'
      };

      await mongoose.connect(mongod.getUri(), mongooseOpts);
   },

   async close () {
      await mongoose.disconnect();
      await mongod.stop({ doCleanup: true, force: true });
   }
}