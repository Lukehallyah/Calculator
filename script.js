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
//function operator: stores the num1 at time operator is chosen(oper=op that is on the button. then clears for num2)
//<button onclick="operator('*')" class="btn multiply">X</button> 
// operator chose "*" in this case::: oper=* (For use in equals() function).
//stores num1. chooses the oper=(*,+,-,/) for equals(), clears inputField so num2 can be stored

function equals(){
    num2=inputField.innerHTML;
    let a= parseInt(num1);
    let b= parseInt(num2);
    let result;

    if(oper==="+") result= add(a,b);
    else if(oper==="-") result= subtract(a,b);
    else if(oper==="*") result= mult(a,b);
    else if(oper==="/") result= div(a,b);

    result = result.toFixed(3);
    inputField.innerHTML=result;
}

//What equals() does
//stores num2
// parses both num1 and num2 and stores in a variable. Otherwise it's a string
//if else statements that do the actual work. THIS IS WHY OPER=OP WAS IMPORTANT
//RESULT- LOOK HOW IT'S UTILISED
// result is fixed to 3 decimal points
//inputField = the results






let inputField = document.querySelector('.inputField');
let clear = document.querySelector('.clear');

function showNumber(num){
    if (num === "." && inputField.innerHTML.includes(".")) return;
    inputField.innerHTML += num;
}



function clearBox(){
    return inputField.innerHTML="";
}
//Now it puts the number there but I must find a way to 
// make it where it add it to like a string or somethind
// and parses it.