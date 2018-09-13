// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]
let matriz = []
for (let j = 0; j < 5; j++) {
    let linha = []
    for (let i = 0; i < 5; i++) {
        linha.push(0)
    }
    matriz.push(linha)
}
// ou...
let linha = []
for (let i = 0; i < 5; i++) {
    linha.push(0)
}
let matriz = []
for (let i = 0; i < 5; i++) {
    matriz.push(linha)
}
// ou..
// nao pratico, porque? referencias.
// ref: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
let matriz = []
let linha = []
for (let i = 0; i < 5; i++) {
    linha.push(0)
    matriz.push(linha)
}

// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]
let matriz = []
for (let j = 0; j < 5; j++) { // A
    let linha = []
    for (let i = 0; i < 5; i++) { // B
        linha.push(Math.abs(i - j))
    }
    matriz.push(linha)
}

// 1 iteracao A -> j = 0; matriz = []
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 0) -> linha = [0]
    // 2 iteracao B -> i = 1; linha = [0]; linha.push(1 - 0) -> linha = [0, 1]
    // 3 iteracao B -> i = 2; linha = [0, 1]; linha.push(2 - 0) -> linha = [0, 1, 2]
    // 4 iteracao B -> i = 3; linha = [0, 1, 2]; linha.push(3 - 0) -> linha = [0, 1, 2, 3]
    // 5 iteracao B -> i = 4; linha = [0, 1, 2, 3]; linha.push(4 - 0) -> linha = [0, 1, 2, 3, 4]
// matriz.push([0, 1, 2, 3, 4]) -> matriz = [[0, 1, 2, 3, 4]]
// 2 iteracao A -> j = 1; matriz = [[0, 1, 2, 3, 4]]
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 1) -> linha = [-1]
    // 2 iteracao B -> i = 1; linha = [-1]; linha.push(1 - 1) -> linha = [-1, 0]
    // 3 iteracao B -> i = 2; linha = [-1, 0]; linha.push(2 - 1) -> linha = [-1, 0, 1]
    // 4 iteracao B -> i = 3; linha = [-1, 0, 1]; linha.push(3 - 1) -> linha = [-1, 0, 1, 2]
    // 5 iteracao B -> i = 4; linha = [-1, 0, 1, 2]; linha.push(4 - 1) -> linha = [-1, 0, 1, 2, 3]
// matriz.push([-1, 0, 1, 2, 3]) -> matriz = [[0, 1, 2, 3, 4], [-1, 0, 1, 2, 3]]
// ...

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *
for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = 0; i < (7 - j); i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = j; i < 7; i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
let asteriscos = "********"
while (asteriscos.length > 1) {
    asteriscos = asteriscos.substr(1, (asteriscos.length - 1))
    console.log(asteriscos)
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 7; i < 7; i++) {
    asteriscos = asteriscos.slice(1)
    console.log(asteriscos.join(""))
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 0; i < 7; i++) {
    asteriscos.pop() 
    console.log(asteriscos.join(""))
}

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
for (let j = 1; j <= 7; j++) {
    let linha = ""
    for (let k = 1; k <= j; k++) {
        linha += k
    }
    for (let i = j; i < 7; i++) { 
        linha += "*"
    }
    console.log(linha)
}
// ou...
let digitos = ""
for (let i = 1; i <= 7; i++) {
    digitos += i
    let numero_com_asteriscos = digitos
    for (let j = 7; j > i; j--) {
        numero_com_asteriscos += "*"
    }
    console.log(numero_com_asteriscos)
}