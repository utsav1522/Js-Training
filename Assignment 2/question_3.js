// function expression that takes in another function as an argument

function fun1 (){
    console.log("function 1 called")
}

function fun2 (fun1){
    console.log("function 2 called");
    fun1()
}

fun2(fun1)