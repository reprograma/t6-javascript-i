let a = 1
let b = 2
let c = 3

// Resultado:
if (6 < 2 * 5) {
	console.log("Hello, world!")
}

// Resultado:
if (a > b && a > c) {
	console.log(1111)
} else {
	console.log(2222)
}

// Resultado:
if (a < c) {
	console.log("*")
} else if (a === b) {
	console.log("&")
} else {
	console.log("$")
}

// Resultado:
if (a < b) {
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado:
const x = 100
const y = 200
if (x > 100 && y <= 200) {
	console.log(`${x} ${y} ${x + y}`)
} else {
	console.log(`${x} ${y} ${2 * x - y}`)
}

// Resultado:
if (a < c) {
	console.log("*")
} else if (a === c) {
	console.log("&")
} else {
	console.log("$")
}

// Resultado:
if (a++ > b++ || a-- > 0) {
	c++
} else {
	c--
}
console.log(`${a} ${b} ${c}`)

// Resultado:
if (a < b) {
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado:
if (a < c) {
	console.log("****")
} else if (b > a) {
	console.log("&&&&")
} else {
	console.log("####")
}