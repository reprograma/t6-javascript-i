// Escreva uma condicional que
// verifica se dois numeros 
// são iguais.
if (x === y) {
	console.log("Os números são iguais.")
} else {
	console.log("Os números não são iguais.")
}

// Escreva uma condicional que
// verifica se um ano é bissexto
// ou não.
if (year % 4 == 0 && year % 100 != 0 || 
	year % 400 == 0) {
	console.log(`${year} é um ano bissexto.`)
} else {
	console.log(`${year} não é um ano bissexto.`)
}

// Escreva uma condicional que
// recebe duas coordenadas e 
// verifica se aquele ponto
// esta no primeiro, segundo,
// terceiro ou quarto quadrante 
// do plano cartesiano.
if (x > 0 && y > 0) {
	console.log(`A coordenada (${x}, ${y}) está no primeiro quadrante.`)
} else if (x < 0 && y > 0) {
	console.log(`A coordenada (${x}, ${y}) está no segundo quadrante.`)
} else if (x < 0 && y < 0) {
	console.log(`A coordenada (${x}, ${y}) está no terceiro quadrante.`)
} else if (x > 0 && y < 0) {
	console.log(`A coordenada (${x}, ${y}) está no quarto quadrante.`)
} else {
	console.error(`Não foi possível determinar em qual quadrante está a coordenada (${x}, ${y})`)
}

// Escreva uma condicional que 
// recebe as medidas de um triangulo
// e determina se ele é isosceles,
// equilatero ou escaleno.
if (a === b && a === c) {
	console.log("O triângulo é equilátero.")
} else if (a !== b && b === c || b !== c && a === b) {
	console.log("O triângulo é isósceles.")
} else {
	console.log("O triângulo é escaleno.")
}

// Escreva uma condicional que recebe
// um caractere e determina se esse
// caractere é uma vogal ou não.
if ("aeiou".indexOf(char) !== -1) {
	console.log(`${char} é uma vogal.`)
} else {
	console.log(`${char} não é uma vogal.`)
}