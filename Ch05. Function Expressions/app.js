// normal function statement
function sayHi() {
    console.log('hi');
}

sayHi();

// function expression
var sayBye = function () {
    console.log('bye');
};

sayBye();

function callFunction(fun) {
    fun();
}

// function expression
var sayBye = function () {
    console.log('bye');
};

callFunction(sayBye);