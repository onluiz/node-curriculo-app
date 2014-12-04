/**
 * Tshirt
 *
 * @module      :: Model
 * @description :: Represent data model for the cvs
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

	  altura:   {
	    type: String
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

	  rua:   {
	    type: String
	  },

	  votos: {
	  	type: Number,
	  	default: 0
	  }
});

module.exports = mongoose.model('Curriculo', Curriculo);