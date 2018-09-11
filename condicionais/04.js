// Reescreva a próxima expressão usando
// um if / else.
// switch (day) {
// 	case 0: 
// 		console.log("Segunda")
// 		break
// 	case 1:
// 		console.log("Terça")
// 		break
// 	case 2:
// 		console.log("Quarta")
// 		break
// 	case 3:
// 		console.log("Quinta")
// 		break
// 	case 4:
// 		console.log("Sexta")
// 		break
// 	case 5:
// 		console.log("Sábado")
// 		break
// 	case 6:
// 		console.log("Domingo")
// 		break
// 	default:
// 		throw "Dia inválido!"
// }
if (day === 0) {
	console.log("Segunda")
} else if (day === 1) {
	console.log("Terça")
} else if (day === 2) {
	console.log("Quarta")
} else if (day === 3) {
	console.log("Quinta")
} else if (day === 4) {
	console.log("Sexta")
} else if (day === 5) {
	console.log("Sábado")
} else if (day === 6) {
	console.log("Domingo")
} else {
	alert("Dia inválido!")
}

// Reescreva a próxima expressão usando
// o operador ternário
// let rand
// if (Math.random() > 0.5) {
// 	rand = true
// } else {
// 	rand = false
// }
let rand = Math.random() > 0.5 ? true : false

// Reescreva a próxima expressão usando
// o operador ternário
// let color
// if (r > g && r > b) {
// 	color = "Vermelho"
// } else if (g > b && g > r) {
// 	color = "Verde"
// } else if (b > r && b > g) {
// 	color = "Azul"
// }
const r = Math.random() * 256
const g = Math.random() * 256
const b = Math.random() * 256
let color = r > g && r > b ? "Vermelho"
	: g > b && g > r ? "Verde" 
	: b > r && b > g ? "Azul"
	: "Cor indefinida"

