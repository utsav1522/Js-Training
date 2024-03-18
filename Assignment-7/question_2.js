// example of using multiple callback functions in a single function 
// in JavaScript

const fun1 = () => {
    console.log("function1 called");
}

const fun2 = () => {
    console.log("function2 called");
}

const fun3 = () => {
    console.log("function3 called");
}

const fun  = (fun1, fun2, fun3) => {
    console.log("Calling Function 1 : ");
    fun1();
    console.log("Calling Function 2");
    fun2();
    console.log("Calling Function 3");
    fun3();
}

fun(fun1, fun2, fun3);