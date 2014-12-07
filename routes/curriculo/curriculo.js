/**
 * Curriculo
 *
 * @module      :: Routes
 * @description :: Maps routes and actions
 * @author      :: Luiz and Ana
 */

 var Curriculo = require('../../models/curriculo.js')

 module.exports = function(app) {

	novo = function(req, res) {
		res.render('novo-curriculo', {resposta: 'inicio'});
	},

	salvar = function(req, res) {

		//Pega dados do formulario e salva usando o modelo Curriculo
		Curriculo(req.body).save(function(err) {
    		if(err)
    			return res.render('novo-curriculo', {resposta: 'erro'});
    		else 
    			return res.render('novo-curriculo', {resposta: 'sucesso'});
	    });

	},

	editar = function(req, res) {

		return Curriculo.findById(req.body._id, function(err, curriculo) {

			for (var key in req.body) { 
				for(var keyCurriculo in curriculo) {
					if(key === keyCurriculo) {
						curriculo[key] = req.body[key];
					}
				}
			}
			curriculo.save(function(err) {
				if(!err)
					return res.render('listar-curriculos', {resposta: 'sucesso-save'});

				return res.render('listar-curriculos', {resposta: 'falha-save'});
			});
			
		});
		

	},

	findById = function(req, res) {

		return Curriculo.findById(req.params.id, function(err, curriculo) {
			return res.send(curriculo);
		});

	},

	votar = function(req, res) {

		return Curriculo.findById(req.params.id, function(err, curriculo) {
			if(!curriculo)
				return false;

			//INCREMENTA VOTO
			curriculo.votos += 1; 
			curriculo.save();
			return true;
		});

	},

	remover = function(req, res) {

		return Curriculo.findById(req.params.id, function(err, curriculo) {
			if(!curriculo)
				return false;

			curriculo.remove();
			return true;
		});

	},

	listar = function(req, res) {
		return res.render('listar-curriculos', {resposta: ''});
	},

	findAll = function(req, res) {

	    return Curriculo.find(function(err, curriculos) {
	      if(!err) {
	        return res.send(curriculos);
	      } else {
	        res.statusCode = 500;
	        console.log('Internal error(%d): %s',res.statusCode,err.message);
	        return res.send({ error: 'Server error' });
	      }
	    });

	  },

	deleteAll = function(req, res) {
		return Curriculo.find(function(err, curriculos) {
	      if(!err) {
	      	console.log(curriculos.length);
	      	for(var i = 0; i < curriculos.length; i++) {
	      		var curriculo = curriculos[i];
	      		curriculo.remove(function(err) {
		        if(!err) {
		          console.log('Removed cv');
		        } 
		      })
	      	}
	      } else {
	        res.statusCode = 500;
	        console.log('Internal error(%d): %s',res.statusCode,err.message);
	        return res.send({ error: 'Server error' });
	      }
	    });
	}

	app.get('/curriculo', novo);
	app.post('/curriculo/salvar', salvar);
	app.post('/curriculo/editar', editar);
	app.get('/curriculo/findById/:id', findById);
	app.get('/curriculo/votar/:id', votar);
	app.get('/curriculo/remover/:id', remover);
	app.get('/curriculo/listar', listar);
	app.post('/curriculo/findAll', findAll);
	app.post('/curriculo/deleteAll', deleteAll);

 }
