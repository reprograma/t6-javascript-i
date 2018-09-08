// Duas condicionais são equivalentes
// quando, dado um mesmo input, devolvem
// o mesmo output. Qual das próximas
// condicionais são equivalentes? Porque?
const rand = Math.floor(Math.random() * 21) - 10

// A
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
} else {
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	} else {
		console.log(`O valor é zero!`)
	}
}

// B
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
} else {
	console.log(`O valor é zero!`)
}

// C
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
}
if (rand === 0) {
	console.log(`O valor é zero!`)
}