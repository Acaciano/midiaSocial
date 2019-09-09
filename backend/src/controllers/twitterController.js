const testCollectionModel = require('../models/twitter');

module.exports = {

   async index(req, res ){
      const data = await testCollectionModel.findOne();
      const objData = {
         'success': true,
         'result': data
      }

      return res.json(data);
   }
};