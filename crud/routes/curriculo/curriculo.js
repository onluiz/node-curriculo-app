/**
 * Curriculo
 *
 * @module      :: Routes
 * @description :: Maps routes and actions
 * @author      :: Luiz
 */

 var Curriculo = require('../../models/curriculo.js')

 module.exports = function(app) {

	novo = function(req, res) {
		res.render('novo-curriculo', {resposta: 'inicio'});
	},

	salvar = function(req, res) {

		Curriculo(req.body).save(function(err) {
    		if(err)
    			return res.send('novo-curriculo', {resposta: 'erro'});
    		else 
    			return res.render('novo-curriculo', {resposta: 'sucesso'});
	    });

	},

	votar = function(req, res) {
		res.on('curriculo', function (data) {
			console.log(data); // I can't parse it because, it's a string. why?
			res.send({ success: 'Server success' });
		});
		console.log("here");
		/**
		Curriculo(req.body).save(function(err) {
    		if(err)
    			return res.send('novo-curriculo', {resposta: 'erro'});
    		else 
    			return res.render('novo-curriculo', {resposta: 'sucesso'});
	    });
		**/

	},

	listar = function(req, res) {
		res.render('listar-curriculos');
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
	},

	todo = function(req, res) {
		res.render('todo');
	},

	blog = function(req, res) {
		res.render('blog');
	}

	app.get('/curriculo', novo);
	app.post('/curriculo/salvar', salvar);
	app.post('/curriculo/votar', votar);
	app.get('/curriculo/listar', listar);
	app.post('/curriculo/findAll', findAll);
	app.post('/curriculo/deleteAll', deleteAll);
	app.get('/curriculo/todo', todo);
	app.get('/curriculo/blog', blog);

 }
