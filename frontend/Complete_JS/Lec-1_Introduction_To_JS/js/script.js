let a = 10;

function print() {

    let b = 20;
    console.log(a); // 10

    console.log(a+b);// 30

    let c = 10; 
    if(c) {
        let d = 30; 
        console.log(d); // 30
    }

    console.log(t);

    console.log(d); // undefined -> Reference error d is not defined
}

print();