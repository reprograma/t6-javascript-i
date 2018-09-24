// Escreva um loop que
// printa no console os dez
// primeiros números naturais.
for (let i = 0; i < 10; i++) {
	console.log(i)
}

// Escreva um loop que
// calcula a soma dos
// cem primeiros números
// impares, começando pelo 1.
let count = 0
let sum = 0
let term = 1
while (count < 100) {
	sum += term
	term += 2
	count++
}

// Escreva um loop que
// printa no console o
// seguinte padrao:
//    1
//   2 2
//  3 3 3
// 4 4 4 4
const lines = 4
for (let i = 1; i <= lines; i++) {
	const spaces = " ".repeat(lines - i)
	const digits = `${i} `.repeat(i)
	console.log(spaces + digits)
}

// Escreva um loop que calcula
// a soma dos cem primeiros 
// numeros da serie harmonica:
// 1 + 1 / 2 + 1 / 3 + ... + 1 / 100
// e printa no console a expressão.
let sum = 0
let expression = ""
for (let i = 1; i <= 100; i++) {
	sum += 1 / i
	expression = `${expression} + 1 / ${i}`
}
expression = `${expression.substr(3)} = ${sum}`
console.log(expression)

// Escreva um loop que calcula
// a soma dos 10 primeiros termos
// da seguinte expressão:
// 1 + 11 + 111 + ... + 1111111111
let sum = 0
for (let i = 1; i <= 10; i++) {
	sum += parseInt("1".repeat(i))
}

// Escreva um loop que
// printa no console o
// seguinte padrão:
//     *
//    *** 
//   *****
//  *******
// ********* 
//  *******
//   *****
//    ***
//     * 
const lines = 4
for (let i = -lines; i <= lines; i++) {
	const abs_i = Math.abs(i)
	const spaces = " ".repeat(abs_i)
	const asteriscs = "*".repeat(Math.abs(abs_i - lines) * 2 + 1)
	console.log(spaces + asteriscs)
}

// Escreva um loop que
// printa no console o
// seguinte padrão:
//       A
//     A B A 
//   A B C B A
// A B C D C B A 
const lines = 4
for (let i = 0; i < lines; i++) {
	const spaces = "  ".repeat(lines - i)
	let chars = ""
	for (let j = -i; j <= i; j++) {
		const abs_j = Math.abs(j)
		chars += `${String.fromCharCode(65 + Math.abs(abs_j - i))} `
	}
	console.log(spaces + chars)
}

// Escreva um loop que
// determina o comprimento
// de uma String sem usar
// a propriedade .length
// da linguagem.
let str = "lorem ipsum"
let count = 0
for (const char in str.slice("")) {
	count++
}

// Escreva um loop que
// reverte uma String.
// Exemplo: Ola -> alO
const str = "Beatriz"
let reversed = ""
for (let i = str.length - 1; i >= 0; i--) {
	reversed += str.charAt(i)
}
console.log(`${str} -> ${reversed}`)