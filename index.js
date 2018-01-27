$(function() {

	class Pokedex {
		constructor() {
			this.fave_list = [];
			this.current_pokemon = null;
		}

		showDetails(name) {
			cachedFetch('https://pokeapi.co/api/v2/pokemon/${name}') .then(r => r.json()) .then(res => {
				console.log(res);
				let id = res.id;
				let name = res.name;
				let height = res.height;
				let weight = res.weight;
				let typeData = res.types;
				let type = '<ul>';
				this.current_pokemon = name;

				for (var i = 0; i < typeData.length; i++) {
					types[i] 
				}
			});
		}	
	}

	
})