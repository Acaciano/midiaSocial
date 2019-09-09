const parametrosModel = require('../models/parametros');

module.exports = {

   async index(req, res ){
      const data = await parametrosModel.findOne();

      const objData = {
         'success': true,
         'result': data
      }

      return res.json(objData);
   },
    
   async store(req, res) {
      const { paramId } = req.params;
      const { model } = req.body;

      console.log(model);

      const parametroDb = await parametrosModel.findById(paramId);


      console.log(parametroDb);

      /*if(parametroDb) {
         await parametrosModel.create({ model });
         parametroDb.termoDeBusca = model.termoDeBusca;
         parametroDb.ouvirTweets = model.ouvirTweets;

         parametroDb.save();

         return res.json(parametroDb);
      }*/

      return res.status(400).json({ error: 'Parametros not exists' });
   }
};