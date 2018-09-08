// hello("what") ->
// hello() ->
function hello() {
	return "Hello, world!"
}

// show(4) ->
// show(-4) ->
function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

// eq3() ->
// eq3(1, 2, 3) ->
// eq3("1", 1, 3) ->
// eq3("!", "a", "b") ->
// eq3("!", "!", !) ->
function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// Resultado:
function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)

// Resultado:
function confusion(x, y) {
	x = 2 * x + y
	return x
}
let x = 2
let y = 5
y = confusion(y, x)
x = confusion(y, x)
console.log(`${x}, ${y}`)