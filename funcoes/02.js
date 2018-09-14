// Escreva uma função
// em Javascript que recebe
// um nome, um pronome e um objeto
// e retorna "<nome> foi caminhar
// no parque. <pronome> encontrou
// <objeto>. <nome> decidiu levar
// <objeto> pra casa."
function frase(nome, pronome, objeto) {
    return `${nome} foi caminhar
        no parque. ${pronome} encontrou
        ${objeto}. ${nome} decidiu levar
        ${objeto} pra casa.`
}

// Escreva uma função
// em Javascript que recebe
// um número qualquer e retorna
// a raiz quadrada dele.
function sqrt(num) {
    if (num < 0) {
        throw "Não existe raiz quadrada de número negativo!"
    } else if (typeof num !== "number") {
        throw "Por favor, insira um número."
    }
    return num ** (1/2)
}
// ou...
function sqrt(num) {
    return Math.sqrt(num)
}

// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.
function binary(num) {
    let result = ""
    do {
        result = (num % 2) + result
        num = Math.floor(num / 2)
    } while (num > 0)
    return result
}

// binary(43) ->
// 1 iteracao -> result = ""; num = 43; result = 43 % 2 + "" = "1"
// 2 iteracao -> result = "1"; num = 21; result = 21 % 2 + "1" = "11"
// 3 iteracao -> result = "11"; num = 10; result = 10 % 2 + "11" = "011"
// 4 iteracao -> result = "011"; num = 5; result = 5 % 2 + "011" = "1011"
// 5 iteracao -> result = "1011"; num = 2; result = 2 % 2 + "1011" = "01011"
// 6 iteracao -> result = "01011"; num = 1; result = 1 % 2 + "01011" = "101011"
// PARA
// result => "101011"

function binary(x) {
    return x.toString(2)
}

// Escreva uma função em Javascript
// que recebe uma lista de números
// e retorna o maior número da lista.
function max(arr) {
    if (typeof arr !== "object") {
        throw "Por favor, forneça uma lista."
    }

    let larger = -Infinity
    for (const item of arr) {
        if (typeof item !== "number") {
            throw "Por favor, forneça uma lista só de nuúmeros."
        }
        if (item > larger) {
            larger = item
        }
    }
    return larger
}

// max([5, 6, 2, 9, 1]) ->
// 1 iteracao -> item = 5; larger = -Infinity; 5 > -Infinity ?
// 2 iteracao -> item = 6; larger = 5; 6 > 5 ?
// 3 iteracao -> item = 2; larger = 6; 2 > 6 ?
// 4 iteracao -> item = 9; larger = 6; 9 > 6 ?
// 5 iteracao -> item = 1; larger = 9; 1 > 9 ?
// larger = 9

// ou...
function max(arr) {
    if (typeof arr !== "object") {
        throw "Por favor, forneça uma lista."
    }

    let larger = arr[0]
    for (const item of arr) {
        if (typeof item !== "number") {
            throw "Por favor, forneça uma lista só de nuúmeros."
        }
        if (item > larger) {
            larger = item
        }
    }
    return larger
}
// ou..
function max(arr) {
    return Math.max(...arr)
}
// ou...
function max(arr) {
    return Math.max.apply(null, arr)
}

// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// sao anagramas umas das outras.
function sortCharactersInString(str) {
    return str
        .split("")
        .sort(function(a, b) {
            a = a.toLowerCase()
            b = b.toLowerCase()
            return a.localeCompare(b)
        })
        .join("")
}

function areAnagrams(a, b) {
    if (a === undefined || b === undefined) {
        throw "Por favor, forneça pelo menos duas strings."
    }
    if (typeof a !== "string" || typeof a !== "string") {
        throw "Por favor, forneça uma lista só de Strings."
    }

    let first = sortCharactersInString(a)
    for (let i = 1; i < arguments.length; i++) {
        if (typeof arguments[i] !== "string") {
            throw "Por favor, forneça uma lista só de Strings."
        }
        if (sortCharactersInString(arguments[i]) !== first) {
            return false
        }
    }

    return true
}

// areAnagrams("alice", "celia", "alcei") ->
// first = "aceil"
// 1 iteracao -> i = 1; arguments[1] = "celia"; "aceil" !== first ?
// 2 iteracao -> i = 2; arguments[2] = "alcei"; "aceil" !== first ?
// PARA

// Escreva uma função em Javascript
// que recebe o raio de um circulo
// e calcula o diametro, a circunferencia
// e a area dele.
function circleDimensions(r) {
    const diameter = r * 2
    const circunference = diameter * Math.PI
    const area = Math.PI * r * r
    return [ diameter, circunference, area ] // opcional
}