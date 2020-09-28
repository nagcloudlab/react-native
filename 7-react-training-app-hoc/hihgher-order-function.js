




// //dev-1
// function hello() {
//     console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺")
//     console.log("hello")
//     console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺")
// }

// hello();

// //dev-2
// function hi() {
//     console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺")
//     console.log("hi")
//     console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺")
// }

// hi();

/**
 * 
 *  design issues
 * 
 *  ==> code scattering / duplication
 *  ==> code tangling / tight coupling
 * 
 *  soln :
 * 
 * 
 *  ==> using 'higher-order-function' principles
 *   
 */








//dev-1
function hello() {
    console.log("hello")
}


//dev-2
function hi() {
    console.log("hi")
}

// HOF
function withFlowerBanner(func) {
    return function () {
        console.log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸")
        func();
        console.log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸")
    }
}



// hello();

// let helloWitFlower=withFlowerBanner(hello)
// helloWitFlower();

withFlowerBanner(hi)();

