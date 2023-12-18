let a = 0;

function add() {
    a++;
}

function show() {
    console.log(a);
}

function main() {
    console.log("CJS");
}

module.exports = {
    add, show, main
}