(function(){
	'use strict'

	var body = $('body');
	var intro = $('.intro');

	if(intro.classList.contains('index')){
		body.style.background = '#3F76A3';
	}

	/*
		Functions
	*/
	function $(node) {
		if(!node || typeof node === 'undefined') {
			console.log('Erro na seleção do Node!');
			return;
		}

		return document.querySelector(node);
	}
}());