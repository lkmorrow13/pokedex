$(function() {
	var pokedex = new Pokedex();
	pokedex.pokeHTML();
	

	// var $btn = $('#get-pokemon-btn');
	// var $detail_section = $('#detail-section');
	// $btn.click(function() {
	// 	var pokemon_name = $(this).data('name');
	// 	$detail-section.html(pokedex.pokeDataAsHTML(pokemon_name));
	// })	
})
class Pokedex {
	constructor() {
		this.pokemonList = pokemonArray;
	}

	pokeHTML() {
		for (var i = 0; i < this.pokemonList.length; i++) {
			// console.log(this.pokemonList[i]);
			$("#pokeList ul").append('<li class="pokemon_name"><a href="' + this.pokemonList[i] + '">' + this.pokemonList[i] + '</a></li>');
		}
		// return pokemonList;
	}
}

// var pokedex = new Pokedex();
