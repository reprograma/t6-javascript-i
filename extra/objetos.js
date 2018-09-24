// Defina um objeto que
// descreve um dos personagens
// da série Harry Potter.
// ref: https://pt.wikipedia.org/wiki/Lista_de_personagens_da_s%C3%A9rie_Harry_Potter
const Bellatrix_Lestrange = {
	first_name: "Bellatrix",
	last_name: "Lestrange",
	house: "Slytherin",
	wand: "Twelve and three-quarter inches, walnut, dragon heartstring",
	occupation: "Death Eater"
}

// Defina um objeto que descreve
// um dos feiticos da serie Harry Potter.
// Cada um desses feiticos deve 
// conter uma propriedade cujo
// valor e um numero entre -10 a 10
// que determina o dano que esse 
// feitico causaria quando atingisse 
// outro personagem.
// ref: http://ggryffindor.blogspot.com/p/lista-de-feiticos.html
const Expelliarmus = {
	name: "Expelliarmus",
	purpose: "To remove an object (often a wand) from the recipient’s hand"
}
const Petrificus_Totallus = {
	name: "Petrificus Totalus",
	purpose: "To temporarily paralyse someone"
}
const Wingardium_Leviosa = {
	name: "Wingardium Leviosa",
	purpose: "The subject will float into the air"
}

// Defina um metodo .spell
// no objeto do personagem que 
// voce criou que retorna um feitico
// randomico se chamado
// sem nenhum argumento, ou
// retorna um determinado feitico
// quando passado um argumento.
Bellatrix_Lestrange.spell = function () {
	const spells = [Expelliarmus, Petrificus_Totallus, Wingardium_Leviosa]
	const random_index = Math.floor(Math.random() * spells.length)
	return spells[random_index]
}

// Defina uma nova propriedade 
// no objeto do personagem
// que determina a quantidade
// de vida que esse personagem tem.
Bellatrix_Lestrange.hp = 100

// Defina um metodo .damage
// que recebe um feitico e
// diminui a quantidade de
// vida do personagem de acordo
// com o dano que o feitico causa.
Expelliarmus.damage = -10
Petrificus_Totallus.damage = -30
Wingardium_Leviosa.damage = 0
Bellatrix_Lestrange.damage = function (spell) {
	this.hp -= spell.damage
}

// Escreva um funcao do
// tipo `constructor` que
// nos permita criar varios
// objetos para diferentes
// personagens da serie Harry Potter.
function Character(first_name, last_name, house, wand, occupation, known_spells) {
	this.first_name = first_name
	this.last_name = last_name
	this.wand = wand
	this.occupation = occupation
	this.known_spells = known_spells
	this.hp = 100
	this.damage = function(spell) {
		this.hp -= spell.damage
	}
	this.spell = function () {
		const random_index = Math.floor(Math.random() * this.known_spells.length)
		return this.known_spells[random_index]
	}
}

// Escreva um funcao do
// tipo `constructor` que
// nos permite criar varios
// objetos para diferentes
// feiticos da serie Harry Potter.
function Spell(name, purpose, damage) {
	this.name = name
	this.purpose = purpose
	this.damage = damage
}

// Escreva uma funcao quee recebe
// dois personages e faz os dois
// "duelarem" ate que a vida de um
// deles chegue em 0. Use sua
// criatividade para determinar como
// essa funcao deve se comportar.
function duel(character1, character2) {
	if (!(character1 instanceof Character) || !(character2 instanceof Character)) {
		throw "Por favor, forneça dois objetos do tipo `Character`"
	}
	console.log("Começar!")
	let players = [character1, character2]
	let current_player_index = Math.floor(Math.random() * 2)
	let next_player_index = current_player_index === 1 ? 0 : 1
	while (character1.hp > 0 && character2.hp > 0) {
		const spell = players[current_player_index].spell()
		players[next_player_index].damage(spell)
		console.log(`\n${players[current_player_index].first_name} ${players[current_player_index].last_name} ataca usando ${spell.name}!`)
		console.log(`${players[current_player_index].first_name} ${players[current_player_index].last_name} HP: ${players[current_player_index].hp}`)
		console.log(`${players[next_player_index].first_name} ${players[next_player_index].last_name} HP: ${players[next_player_index].hp}`)
		const aux = current_player_index
		current_player_index = next_player_index
		next_player_index = aux
	}
	console.log("E o vencedor é...")
	if (character1.hp < 0) {
		return character2
	} else {
		return character1
	}
}

// Exemplo...
const expelliarmus = new Spell("Expelliarmus", "To remove an object (often a wand) from the recipient’s hand", 10)
const stupefy = new Spell("Stupefy", "To stun an opponent, rendering them unconscious", 40)
const petrificus_totalus = new Spell("Petrificus Totalus", "To temporarily paralyse someone", 25)
const crucio = new Spell("Crucio", "To inflict excruciating pain on the recipient/victim", 20)
const avada_kedavra = new Spell("Avada Kedavra", "Instant death", 100)

const bellatrix_lestrange = new Character("Bellatrix", "Lestrange", "Slytherin", "Twelve and three-quarter inches, walnut, dragon heartstring", "Death Eater", [crucio, expelliarmus, stupefy, avada_kedavra])
const sirius_black = new Character("Sirius", "Black", "Gryffindor", "Unknown", "Prisoner", [expelliarmus, stupefy, petrificus_totalus])

duel(bellatrix_lestrange, sirius_black)

