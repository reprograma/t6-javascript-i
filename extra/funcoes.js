// Escreva uma funcao
// que recebe um número
// decimal e o transforma
// em hexadecimal. Não
// use a funcao .toString().
function hex(num) {
    let result = ""
    do {
    	let remainder = num % 16
    	switch (remainder) {
    		case 10:
    			remainder = "A"
    			break
    		case 11:
    			remainder = "B"
    			break
    		case 12:
    			remainder = "C"
    			break
    		case 13:
    			remainder = "D"
    			break
    		case 14:
    			remainder = "E"
    			break
    		case 15:
    			remainder = "F"
    			break
    	}
        result = remainder + result
        num = Math.floor(num / 16)
    } while (num > 0)
    return result
}

// Escreva uma funcao que 
// recebe uma quantidade n
// e retorna os n primeiros
// numeros da sequencia de
// Fibonacci.
function fibonacci(terms) {
	if (typeof terms !== "number") {
		throw "Por favor, forneça um número de termos para a sequência."
	}
	if (terms < 2) {
		throw "Por favor, forneça um número maior do que 1."
	}
	terms = Math.ceil(terms)

	let fib = [1, 1]
	for (let i = 2; i < terms; i++) {
		fib.push(fib[fib.length - 1] + fib[fib.length - 2])
	}

	return fib
}

// Escreva uma funcao que
// recebe dois numeros e retorna
// o minimo multiplo comum
// entre eles.
function mmc(num1, num2) {
    let remainder, a, b
    a = num1
    b = num2

    do {
        remainder = a % b

        a = b
        b = remainder

    } while (remainder !== 0)

    return (num1 * num2) / a
}

// Escreva uma funcao que
// recebe uma quantidade n
// e printa no console
// n numero de linhas do
// seguinte padrao:
//
// 		1234567654321                                                                                            
//       12345654321                                                                                             
//        123454321                                                                                              
//         1234321                                                                                               
//          12321                                                                                                
//           121                                                                                                 
//            1 
function pyramid(lines) {
	for (let i = lines; i > 0; i--) {
		const spaces = " ".repeat(lines - i)
		let digits = ""
		for (let j = -i + 1; j < i; j++) {
			const abs_j = Math.abs(j)
			digits += `${Math.abs(abs_j - i)}`
		}
		console.log(spaces + digits)
	}
}

// Escreva um funcao que
// recebe um numero e retorna
// true se ele for primo e false
// se nao.
function isPrime(num) {
	if (typeof num !== "number") {
		throw "Por favor, forneça um número."
	}

	num = Math.ceil(Math.abs(num))

	if (num === 0) return true
	if (num === 1) return false 

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false
		}
	}

	return true
}

// Escreva uma funcao que
// calcula a soma de todos
// os elementos em um array.
function sum(arr) {
	let sum = 0
	for (const item of arr) {
		if (typeof item !== "number") {
			throw "Por favor, forneça uma lista só de números."
		}
		sum += item
	}
	return sum
}

// Escreva uma funcao que
// recebe um array e um
// elemento e determina
// se o array inclui esse
// elemento. Não use o metodo
// .includes dos arrays.
function includes(el, arr) {
	for (const item of arr) {
		if (el === item) return true
	}
	return false
}

// Escreva uma funcao que
// recebe duas ou mais arrays 
// e retorna true se elas
// forem exatamente iguais.
function arraysAreEqual(arr1, arr2) {
	if (arr1 === arr2) return true
	if (arr1.length !== arr2.length) return false
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false
	}
	return true
}

// Escreva uma funcao
// que recebe dois ou mais
// objetos e retorna true se
// eles forem exatamente iguais.
function objectsAreEqual(objA, objB) {
	if (objA === objB) return true

    const aProps = Object.keys(objA)
    const bProps = Object.keys(objB)

    if (aProps.length !== bProps.length) return false

    for (let i = 0; i < aProps.length; i++) {
        const prop = aProps[i]
        if (objA[prop] !== objB[prop]) return false
    }

    return true
}

// Escreva uma funcao que
// recebe duas arrays e retorna
// uma terceira array com
// todos os elementos da 
// primeira array que nao
// estao presentes na segunda.
function diff(arr1, arr2) {
	let result = []
	for (const item of arr1) {
		if (!arr2.includes(item)) result.push(item)
	}
	for (const item of arr2) {
		if (!arr1.includes(item)) result.push(item)
	}
	return result
}

// Escreva um funcao que
// recebe um objeto e retorna
// um array com todas as chaves
// desse objeto. Não use a funcao
// Object.keys().
function keys(obj) {
	let arr = []
	for (const key in obj) {
		arr.push(key)
	}
	return arr
}