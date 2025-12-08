let inputField = document.querySelector('.inputField');
let clear = document.querySelector('.clear');

let num1="";
let num2="";
let oper=null;




//////////////////////////////////////////////////////////////////////////




function showNumber(num){
    if (num === "." && inputField.innerHTML.includes(".")) return;
    inputField.innerHTML += num;
}




//////////////////////////////////////////////////////////////////////////

function clearBox(){
     inputField.innerHTML="";
     num1="";
     num2="";
     oper=null;
     result=null;

}






//////////////////////////////////////////////////////////////////////////
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


///////////////////////////////////////////////////////////////////////////

function operator(op){
    if(inputField.innerHTML !== ""){
        if(num1 !== "" && oper !== null){  // if previous number & operator exist
            equals();  // calculate previous result first
        } else {
            num1 = inputField.innerHTML;  // first operation
        }
    }
    oper = op;
    inputField.innerHTML = '';
}

//function operator: stores the num1 at time operator is chosen(oper=op that is on the button. then clears for num2)
//<button onclick="operator('*')" class="btn multiply">X</button> 
// operator chose "*" in this case::: oper=* (For use in equals() function).
//stores num1. chooses the oper=(*,+,-,/) for equals(), clears inputField so num2 can be stored

function equals(){
    num2=inputField.innerHTML;
    if(oper === "/" && parseFloat(num2) === 0){
        inputField.innerHTML = "are You Sure?";
        num1 = "";
        num2 = "";
        result = null;
        oper = null;
        return;
    }
    
    let result;
    

    let a= parseFloat(num1);
    let b= parseFloat(num2);
    

    if(oper==="+") result= add(a,b);
    else if(oper==="-") result= subtract(a,b);
    else if(oper==="*") result= mult(a,b);
    else if(oper==="/") result= div(a,b);

    inputField.innerHTML= result.toFixed(1);
    inputField.innerHTML=result;
    num1=parseFloat(result);
    num2="";
    oper=null;
    //What I know:: result is everything so far. It will show. The functions worked.
    // tried ::: let result=a; to reset the calculation and make it a. Didn't work
}

//What equals() does
//stores num2
// parses both num1 and num2 and stores in a variable. Otherwise it's a string
//if else statements that do the actual work. THIS IS WHY OPER=OP WAS IMPORTANT
//RESULT- LOOK HOW IT'S UTILISED
// result is fixed to 3 decimal points
//inputField = the results







//Now it puts the number there but I must find a way to 
// make it where it add it to like a string or somethind
// and parses it.