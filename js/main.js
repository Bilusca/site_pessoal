(function(){
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