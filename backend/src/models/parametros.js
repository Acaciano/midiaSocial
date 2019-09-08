const { Schema, model } = require('mongoose');

const parametrosSchema = new Schema({
	ouvirTweets: {
		type: Boolean,
		required: true,
	},
	termosAtualizados: {
		type: Boolean,
		required: false,
	},
	termoDeBusca: [{
		type: String,
		required: true,
	}]
}, {
	timestamps: true,
});

module.exports = model('parametros', parametrosSchema);