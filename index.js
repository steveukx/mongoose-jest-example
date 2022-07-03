const {connect, close} = require('./src/util/connection');

(async () => {
   await connect();
   console.log('Connection ready');

   // your application here

   await close();
   console.log('Connection closed');
})();