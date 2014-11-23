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
		res.render('novo-curriculo');
	},

	salvar = function(req, res) {
		console.log("here");
		//console.log(JSON.parse(req.body));
		//res.json({ message: req.body });

		Curriculo(req.body).save(function(err) {
			
    		if(err)
    			return res.send({ status: 'erro', error: res });
    		else
    			return res.send({ status: 'sucesso', success: res});
    		
	    });

		/**
		req.on('data', function(data) {
	    	var curriculo = new Curriculo(JSON.parse(data));
	    	curriculo.votos = "0";
	    	console.log(curriculo);

	    	curriculo.save(function(err) {
	    		if(err)
	    			return res.send({ status: 'erro', error:err });
	    		else
	    			return res.send({ status: 'sucesso', curriculo: curriculo});
		    });
	    });
		*/

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
	app.get('/curriculo/listar', listar);
	app.post('/curriculo/findAll', findAll);
	app.post('/curriculo/deleteAll', deleteAll);
	app.get('/curriculo/todo', todo);
	app.get('/curriculo/blog', blog);

 }
