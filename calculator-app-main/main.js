var operators = ["+", "-", "x", "/"];
var displayValue = "0";

function input(value){
    if(value === "=")
        alert(value);
    
    else if(value === "del")
        alert(value);

    else if(value === "reset"){
        document.getElementById("display").innerHTML = "0";
    }

    else if(operators.includes(value))
        alert(value);

    else
        updateDisplay(value);
}

function updateDisplay(value){

    if(value === "." && displayValue.includes("."))
        return;

    displayValue === "0" ? 
        displayValue = value : 
        displayValue = `${displayValue}${value}`;

    document.getElementById("display").innerHTML = displayValue;
}