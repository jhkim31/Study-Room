let a = 0;
function add() {
    a++;
}
function show(){
    console.log(a);
}
setTimeout(() => {
    add();
    add()

}, 1000)
module.exports = {
    add, show
}