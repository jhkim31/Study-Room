let level1 = 1;
function outer() {
    let level2 = 2;
    function inner() {
        let level3 = 3;

        console.log(level1);
        console.log(level2);
        console.log(level3);
    }

    inner();
}

outer();