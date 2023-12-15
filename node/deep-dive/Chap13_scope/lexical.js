let a = 1;

function foo() {
    let a = 2;
    bar();
}

function bar(){ 
    console.log(a);
}

foo();