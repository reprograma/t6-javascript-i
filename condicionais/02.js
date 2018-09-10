// Escreva a expressão em
// Javascript que atribui o
// valor `1` a `x` se `x`
// for maior do que `y`.
if (x > y) {
	x = 1
}

// Escreva a expressão em
// Javascript que aumenta o
// valor da variável `score`
// em 5 unidades caso o valor
// inicial de `score` esteja
// entre 80 e 90.
if (score >= 80 && score <= 90) {
	score += 5 // score = score + 5
}

// Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )
item = ( i < 10 || v >= 50 ) === false
// ou...
item = ( i >= 10 && v < 50 )
// refs: 
// - http://www.math.toronto.edu/preparing-for-calculus/3_logic/we_3_negation.html
// - https://centraldefavoritos.com.br/2017/01/02/negacao-de-proposicoes/ (ver: "Negação de uma Proposição Disjuntiva")

// Escreva a expressão em
// Javascript que retorna `true`
// se um número é par e `false`
// se um número é impar.
if (n % 2 === 0) {
	console.log(true)
} else {
	console.log(false)
}
// ou ...
if (n & 1 === 0) {
	console.log(true)
} else {
	console.log(false)
}
// refs: 
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
// - https://code.tutsplus.com/articles/understanding-bitwise-operators--active-11301 (ver: "The & Operator")

// Escreva a expressão em
// Javascript que retorna `true` 
// se dois números forem positivos
// e `false` se dois números 
// forem negativos.
if (x > 0 && y > 0) {
	console.log(true)
} else if(x < 0 && y < 0) {
	console.log(false)
}

// Escreva a expressão em
// Javascript que retorna `true`
// dois números tiverem os mesmo
// sinal (+ / -) e `false` 
// se dois números tiverem sinais
// diferentes.
if (x > 0 && y > 0 || 
	x < 0 && y < 0) {
	console.log(true)
} else {
	console.log(false)
}
// ou...
if (x > 0 && y > 0) {
	console.log(true)
} else if (x < 0 && y < 0) {
	console.log(true)
} else {
	console.log(false)
}
// ou...
if (Math.sign(x) === Math.sign(y) && 
	Math.sign(x) !== 0) {
	console.log(true)
} else {
	console.log(false)
}