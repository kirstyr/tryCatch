$(function(){

	'use strict';

	function runScripts(){

		var setup = {

			init: function(){

				for(var funcs in site_functions) {

					try {

						site_functions[funcs]();

					} catch(error) {

						console.error('[By the way, you broke something! Look in "'+funcs+'" for the error!] - ' + error);

					}

				}

			}

		}

		setup.init();

	}
	
	var site_functions  = {

		test: function() {

			var self = this;

			self.init = function() {

				self.method2();

			}

			this.init();

		},

		test2: function() {

			console.log('test');

		}

	}

	runScripts();

});