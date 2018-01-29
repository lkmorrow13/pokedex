$(function() {
	var pokedex = new Pokedex();
	pokedex.pokeHTML();
	// pokedex.showDetails('mew');

	$(document).on('click', '.pokemon_name', function() {
		pokedex.showDetails($(this).data('name'));
		$('.activePoke').removeClass('activePoke');
		$(this).addClass('activePoke');
	})

	$(document).on('click', '#faveClick', function() {
		pokedex.addFave($('.activePoke').data('name'));
	})

	$(document).on('click', '#unfaveClick', function() {
		pokedex.removeFave($('.activePoke').data('name'));
	})

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
		this.currentPoke = null;
		this.faveList = [];
	}

	pokeHTML() {
		for (var i = 0; i < this.pokemonList.length; i++) {
			// console.log(this.pokemonList[i]);
			$("#pokeList ul").append('<li class="pokemon_name" data-name="'+ this.pokemonList[i] + '">' + this.pokemonList[i] + '</li>');
		}
		// return pokemonList;
	}

	

	showDetails(pokename) {
		var url = ('https://pokeapi.co/api/v2/pokemon/')
		cachedFetch(url + pokename) .then(r => r.json()) .then(res => { 
			console.log(res)
			// this.currentPoke = res.name;
			let {sprites} = res;
			
			$('#info').html(` 
				<div id="pokesprite"><img class="pic" src="${(sprites.front_default ? sprites.front_default : ``)}" />
				<img class="pic" src="${(sprites.back_default ? sprites.back_default : ``)}" />
				<img class="pic" src="${(sprites.back_female ? sprites.back_female : ``)}" />
				<img class="pic" src="${(sprites.back_shiny ? sprites.back_shiny : ``)}" />
				<img class="pic" src="${(sprites.back_shiny_female ? sprites.back_shiny_female : ``)}" />
				<img class="pic" src="${(sprites.front_female ? sprites.front_female : ``)}" />
				<img class="pic" src="${(sprites.front_shiny ? sprites.front_shiny : ``)}" />
				<img class="pic" src="${(sprites.front_shiny_female ? sprites.front_shiny_female : ``)}" /></div>
				<div id="pokeName" class="info"> ${res.name}</div>
				<div id="pokeNumber" class="info"> ${res.id}</div>
				<div id="pokeType" class="info"> ${res.types[0].type.name}</div>
				<div id="pokeHeight" class="info"> ${res.height}</div>
				<div id="pokeWeight" class="info"> ${res.weight}</div>
				<div id="pokeInfo"> </div>
				`)
		 });
	}
	// updates the fav list html
	listFaves(name) {
		$('#pokeFavorites ul').html(this.faveList.map(name => `<li>${name}</li>`));
	}

	addFave(name) {
		this.faveList.push(name);
		this.listFaves(); // updates the HTML
	}

	removeFave(name) {
		for (var i = 0; i < this.faveList.length; i++) {
			 if (this.faveList[i] == name) {
			 	this.faveList.splice(i, 1);
			 }
		}
		this.listFaves(); // updates the HTML
	}
}

// var pokedex = new Pokedex();
