/**
 * Tshirt
 *
 * @module      :: Model
 * @description :: Represent data model for the Tshirts
 * @author        :: Luiz Alberto da Silva Jr
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Curriculo = new Schema({

	  nome:   {
	    type: String
	  },

	  email:   {
	    type: String
	  },

	  dataNascimento:   {
	    type: Date
	  },

	  altura:   {
	    type: Number
	  },

	  site:   {
	    type: String
	  },

	  estadoCivil:   {
	    type: String
	  },

	  sexo:   {
	    type: String
	  },

	  cep:   {
	    type: String
	  },

	  telefone:   {
	    type: String
	  },

	  celular:   {
	    type: String
	  },

	  conhecimento:   {
	    type: String
	  },

	  celular:   {
	    type: String
	  },

	  votos: {
	  	type: Number,
	  	default: 0
	  }
});

module.exports = mongoose.model('Curriculo', Curriculo);