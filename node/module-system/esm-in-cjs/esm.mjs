let a = 0;

function add() {
    a++;
}

function show() {
    console.log(a);
}

function main() {
    console.log("ESM");
}
export default main;
export {add, show};