function add(a,b){
    return a +b 
};

function subtract(a,b){
    return a-b
};

function mult(a,b){
    return a*b
};

function div(a,b){
    return a/b
};

function operator(op){
    num1=inputField.innerHTML;
    oper=op;
    inputField.innerHTML='';
}


function equals(){
    num2=inputField.innerHTML;
    let a= parseInt(num1);
    let b= parseInt(num2);
    let result;

    if(oper==="+") result= add(a,b);
    else if(oper==="-") result= subtract(a,b);
    else if(oper==="*") result= mult(a,b);
    else if(oper==="/") result= div(a,b);

    inputField.innerHTML=result;
}


//the function: has to put multiple values into a string
//   and then parseInt() so that it becomes a number.
let inputField = document.querySelector('.inputField');
let clear = document.querySelector('.clear');

function showNumber(num){
    let current ="";
    current+=num;
    document.querySelector(".inputField").innerHTML+=current;
}


function clearBox(){
    return inputField.innerHTML="";
}
//Now it puts the number there but I must find a way to 
// make it where it add it to like a string or somethind
// and parses it.