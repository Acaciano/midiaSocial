const { Schema, model } = require('mongoose');

const testCollectionSchema = new Schema({
	username: {
		type: String,
		required: false
	}
});

module.exports = model('testCollection', testCollectionSchema);