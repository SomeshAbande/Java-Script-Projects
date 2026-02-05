// calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
        display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(erro){
        display.value = "Error";
    }
}

// key board support 
document.addEventListener("keydown",function(event){
    const key = event.key;

    // all numbers
    if(key >=0 && key <= 9){
        appendToDisplay(key);
    }

    //allow operators
    else if(key == "+" || key == "-" || key == "*" || key == "/" || key == "."){
        appendToDisplay(key);
    }

    // Enter key -> calculate
    else if(key == "Enter"){
        calculate();
    }

    //backspace -> remove last character
    else if(key == "Backspace"){
        display.value = display.value.slice(0, -1);
    }

    //Escape -> clear display
    else if(key == "Escape"){
        clearDisplay();
    }
});