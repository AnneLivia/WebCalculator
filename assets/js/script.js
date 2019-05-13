// variable used to keep track of the math expression inserted
var expression = "";

// variable to control if a operator was clicked or not, so that
// we can only use one operator for two numbers
var operator = false;

// variable to control if a number has a dot or not
// a number here can only has one dot, so that, when we click in
// the dot operator many times, it will just appears once for each number
var dot = false;

// when update site, insert empty value on screen
window.onload = document.getElementById("screen").value = "";

// Reading numbers from 0 to 9. where:
// PreventDefault is used to cancel the default behavior that the elements usually
// have in the page. 
// expression+="some number" is the concatenation of the numbers with the inserted ones
// document.getElementById("screen").value = expression is where we update the value
// in the screen
// operator = false, so that, after we digit at least one number, we already can use another
// operator (+,-,=,*), if the operator is true, we can't use. 
// this variable is used to prevent this - - - -, that happens when we clicked many times
// in the subtract operator, etc.
// movecarot() is used to place the Caret cursor at the end of the numbers, so that
// the cursor follow the length of expression.
document.getElementById("zero").addEventListener('click', e => {
    e.preventDefault();
    expression+="0";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("one").addEventListener('click', e => {
    e.preventDefault();
    expression+="1";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("two").addEventListener('click', e => {
    e.preventDefault();
    expression+="2";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("three").addEventListener('click', e => {
    e.preventDefault();
    expression+="3";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("four").addEventListener('click', e => {
    e.preventDefault();
    expression+="4";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("five").addEventListener('click', e => {
    e.preventDefault();
    expression+="5";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("six").addEventListener('click', e => {
    e.preventDefault();
    expression+="6";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("seven").addEventListener('click', e => {
    e.preventDefault();
    expression+="7";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("eight").addEventListener('click', e => {
    e.preventDefault();
    expression+="8";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});

document.getElementById("nine").addEventListener('click', e => {
    e.preventDefault();
    expression+="9";
    document.getElementById("screen").value = expression;
    operator = false;
    moveCarot();
});
// End of the buttons of numbers

// Buttons of the operators (+, -, *, /, square root, x^2, n! and - and +)
document.getElementById("add").addEventListener('click', e => {
    e.preventDefault();
    // if the expression is empty, it means that we cannot perform any operation
    if(expression != "") {
        // if the operator is true, it means that we have already clicked in a 
        // operator, so what we can do is to remove that inserted operator and insert another
        if(operator) {
            // so, we take the substring from 0 to the length of the expression - 3, which means that
            // we don't want to get the "space" "sign" "space", such as " x ". that's why we use 3.
            expression = expression.substr(0, expression.length - 3);
        }
        // after remove one inserted operator, or not, we insert the one refered by this button
        expression+=" + ";
        // show it on the screen, by updating the value
        document.getElementById("screen").value = expression;
        // assign true to the operator, which means that we cannot insert another operator until we
        // insert at least one number.
        operator = true;
        // dot is false, because now we are going to add a new number, so we can add a dot again
        dot = false;
        // movecarot to make the cursor follow the length of the expression
        moveCarot();
    }
});

// same as the button of add, but now is for subtraction
document.getElementById("subtraction").addEventListener('click', e => {
    e.preventDefault();
    if(expression != "") {   
        if(operator) {
            expression = expression.substr(0, expression.length - 3);
        } 
        expression+=" - ";
        document.getElementById("screen").value = expression;
        operator = true;
        dot = false;
        moveCarot();
    }
});

// same as the button of add, but now is for multiplication
document.getElementById("multiplication").addEventListener('click', e => {
    e.preventDefault();
    if(expression != "") {
        if(operator) {
            expression = expression.substr(0, expression.length - 3);
        }    
        expression+=" * ";
        document.getElementById("screen").value = expression;
        operator = true;
        dot = false;
        moveCarot();
    }        
});

// same as the button of add, but now is for division
document.getElementById("division").addEventListener('click', e => {
    e.preventDefault();
    if(expression != "") {
        if(operator) {
            expression = expression.substr(0, expression.length - 3);
        }
        expression+=" / ";
        document.getElementById("screen").value = expression;
        operator = true;
        dot = false;
        moveCarot();
    }        
});
// end of the basic operations

// For the fatorial expression we need to get the last digited number
document.getElementById("fatorial").addEventListener('click', e =>{
    e.preventDefault();
    // if operator is false, it means the last click value is a number nor a operator
    // so that, we can perform the calculation of the fatorial.
    // and if the expression is empty, we perform any operation
    if(!operator && expression != "") {
        // getting the last number and removing this number from the expression by calling the function 
        // getLastDigitedNumber().
        let finalNumber = getLastDigitedNumber();
        // calculating fatorial of this obtained number by calling the function fatorial
        expression+=fatorial(parseInt(finalNumber)).toString();
        // Updating the expression on the screen
        document.getElementById('screen').value = expression;
        moveCarot();

        // OBS: there's no need to check if the fatorial result has a dot or not, 
        // because it's going to be an interger, so dot must be false.
        dot = false;
    }
});

document.getElementById("power2").addEventListener('click', e =>{
    e.preventDefault();
    if(!operator && expression != "") {
        // getting the last number and removing this number from the expression by calling the function 
        // getLastDigitedNumber().
        let finalNumber = getLastDigitedNumber();
        // calculating the obtained number to the power of 2 and assign it to a variable
        let result = (Math.pow(parseFloat(finalNumber), 2)).toString();
        // since I'm going to get only one number, I need to check if that number has a
        // dot or not, in case that number don't have a dot, I must set the dot to false,
        // so that I can add a new dot
        dot = thereisDot(result);
        // assing the final result (fatorial) to the expression and updating the screen
        expression+=result;
        document.getElementById('screen').value = expression;
        moveCarot();
    }
});

document.getElementById("square").addEventListener('click', e =>{
    e.preventDefault();
    if(!operator && expression != "") {
        // getting the last number and removing this number from the expression by calling the function 
        // getLastDigitedNumber().
        let finalNumber = getLastDigitedNumber();
        // calculating the square root of the obtained number and assign it to a variable
        let result = (Math.sqrt(parseFloat(finalNumber))).toString();
        // since I'm going to get only one number, I need to check if that number has a
        // dot or not, in case that number don't have a dot, I must set the dot to false,
        // so that I can add a new dot
        dot = thereisDot(result);
        // assing the final result (fatorial) to the expression and updating the screen
        expression+=result;
        document.getElementById('screen').value = expression;
        moveCarot();
    }
});

document.getElementById("plus-minus").addEventListener('click', e =>{
    e.preventDefault();
    if(!operator && expression != "") {
        // getting the last number and removing this number from the expression by calling the function 
        // getLastDigitedNumber().
        let finalNumber = getLastDigitedNumber();
        // inverting the sign of the obtained number, to negative or positive
        expression+=((parseFloat(finalNumber) * -1)).toString();
        document.getElementById('screen').value = expression;
        moveCarot();
    }
});
// and of the extra operations

// button to include a dot
document.getElementById("dot").addEventListener('click', e => {
    e.preventDefault();
    // if there's any dot yet, since we can insert only one, and
    // there's any operator, which means we are currently typing a number,
    // and if the expression is not empty, we can add a dot, so:
    if(!dot && !operator && expression != "") {    
        // concatenate that dot at the end of the expression
        expression+='.';
        // update the screen with the new expression
        document.getElementById("screen").value = expression;
        // set dot to true, so now we can only add another dot in other number and
        // just after we insert a new operation, which means that we are going 
        // to deal with a new number. (one number can have only one dot)
        dot = true;
        // move carot to the end of the expression
        moveCarot();
    }
});

// button used to delete the numbers charactare by charactere
document.getElementById("erase").addEventListener('click', e => {
    // variable used to get the last removed char, just to check if it was a dot or not
    let lastChar = '', isDot = false;
    e.preventDefault();
    // if the last value is a operator, which means that it was not added a number 
    // after it, we remove the space around this operator and the operator itself
    // to check if the last is a operator, we can just check if there's a space at the
    // end of the expression
    if(expression.charAt(expression.length - 1) == ' ') {
        // in case, there's an operator, we get a substring, starting from zero and ending
        // 3 chars less than the size of the expression. which means that we are removing
        // the spaces and the operator
        expression = expression.substr(0, expression.length - 3);
        // if we remove a operator, we need to set operator variable to false, so
        // we can add other operator again
        operator = false;
    } else {
        // otherwise, remove only the last char
        // assign the last char to the lastChar variable, to check it later
        lastChar = expression.charAt(expression.length - 1);
        // remove it from the expression
        expression = expression.substr(0, expression.length - 1);
    }

    // after delete the operator or the last char, if it has left a . at the end, we need
    // to remove it
    if(expression.charAt(expression.length - 1) == '.') {
        // remove by one, only the .
        expression = expression.substr(0, expression.length - 1);
        // setting dot to true to specifie that additionally it was removed a .
        isDot = true;
    } else if (expression.charAt(expression.length - 1) == ' ') {
        // otherwise, if it has left a space, it means that we have a operator
        // so, if there were a number and we remove all of this number, we need to
        // add another number, we cannot use another operator after another operator
        // in the buttons of number from one to zero, the operator is set to false, but
        // here, we need to set it to true again, "as if it was not added any number"
        operator = true;
    }

    // if lastChar is equal to dot, it means that there were removed only one char
    // and it was a dot, and if the isDot is true, it means that, the value we removed was not a dot
    // was a number, but after we have removed that number, it has left a dot, so we need to
    // remove it to, so set dot to false, and now we can use a dot again in a number
    if(lastChar == '.' || isDot)
        dot = false;

    // showing new expression on the screen
    document.getElementById("screen").value = expression;
});

// button used to clear all the information in the calculator
document.getElementById("clear").addEventListener('click', e => {
    e.preventDefault();
    // set expression to ""
    expression = "";
    // set operator to false
    operator  = false;
    // set dot to false
    dot = false;
    // update screen
    document.getElementById("screen").value = expression;
});

// button used to clear the last entry, so:
// if we type 2 + 3 + 4 * 7, and we click this button, the 7 is going to be deleted
document.getElementById("clearEntry").addEventListener('click', e => {
    e.preventDefault();
    // if there's no operator, since we can only remove a number here
    // and the expression is not empty
    if(!operator && expression != "") {
        // run through the string from the back to the front until it find a space
        // when it find a space, is when it got to a operator.
        // if it does not find a space, it means that there's only one number, so it goes
        // until the index 0, and remove everything. 
        let i = 0;
        for(i = expression.length - 1; i >= 0; i--) {
            if(expression.charAt(i) == ' ') {
                break;
            }
        }
        // set operator to true, so now we cannot add a new operator, just a number
        operator = true;
        // set dot to false in case the number had one dot, now it can be added again
        dot = false;
        // get a substring from 0, to i + 1, i is where it was found a space or is 0
        expression = expression.substr(0, i + 1);
        // updating the expression on the screen
        document.getElementById("screen").value = expression;
    }
});

// function used to perform the calculation
document.getElementById("result").addEventListener('click', e => {
    e.preventDefault();
    // if there's no operator at the and, the expression can be valid
    if(!operator) { 
        // creating two arrays of objects, one to store the numbers and another for the operators
        let number = [];
        let op = [];
        // numberS is going to be used to save each number and insert it into the number array
        let numberS = "";
        // expression must have a space after the last char, because of the last evaluation of else in the condition
        expression+=" ";
        for(let i = 0; i < expression.length + 1; i++) {
            // if there's a char different of space, it can be a number, but
            // if there's a operator (usually - in case a negative number) and
            // the next value after this operation is not a space, it means that is
            // a number, but in case there's any operator right before a number, but indeed
            // there's an operator and after and before it there's a space, it's when the if
            // is evaluated as false, and it goes to the else.
            if(expression.charAt(i) != " " && 
              ((operatorSign(expression.charAt(i)) && expression.charAt(i + 1) != " ") 
               || (!operatorSign(expression.charAt(i))))) {
                // but in case, this if is true, numberS is going to receive the i number.
                numberS+=expression.charAt(i);
            } else {
                // otherwise, we've found a complete number or a operator, so
                if(numberS != "") {
                    // if numberS is not empty, which can happen, if we get operators and space,
                    // we insert it in the number array as a float
                    number.push(parseFloat(numberS));
                    // and set numberS to "" again, so that it can take other number
                    numberS = "";
                } else if(operatorSign(expression.charAt(i))) {
                    // if the numberS is empty, we've found either a operator or a space, but
                    // the condition above checks only for operator, so if it gets here, we push it
                    // into the array  
                    op.push(expression.charAt(i));
                }
            }
        }
        // Check if there's only one number in the screen. 
        // in case it has just one, the number must be preserved.
        if(op.length > 0) {
            // after all of it, we pass to the function calculation the array of numbers and operators
            // this function returns a single number with the full result of the expression, it must be converted
            // to string to be added in the text, and update the expression 
            expression = calculation(number, op).toString();
            // showing the new expression on the screen (final result)
            document.getElementById("screen").value = expression;
        } else {
            // since there's only one number, and I must let this number on the screen
            // and I've added a space to perform the operations above, I need to remove that
            // space again, and update the expression on the screen, without the space. 
            expression = expression.substring(0, expression.length - 1);
            document.getElementById("screen").value = expression;
        }
        // if the expression has one dot, then we cannot add another dot to the result,
        // that's why we must check. 
        dot = thereisDot(expression);
    }
});

// this function performs the calculation between all number, it has as a parametor
// a list of the numbers and the operator
function calculation(number, op) {
    // result is the function that is going to store the final result 
    let result = 0;
    // while length of the number is greater than 1, it means still have numbers to 
    // calculate, and when we get to 1, it stops, and in the index 0, is going to be saved
    // the final result of the expression
    while(number.length > 1) {
        // i is the iterator
        let i;
        // found is used to check preceedence, the first / or * it finds, it takes the 
        // specified index using i
        let found = false;
        for(i = 0; i < op.length; i++) {
            // if operator is / or *, it stops the loop. the first it got
            if(op[i] == '/' || op[i] == '*') {
                found = true;
                break;
            }
        }

        // if found is false, it means that there's any / or *, which means that we can
        // perform additions and subtractions now, setting i to 0, is that we get the first 
        // operator in the array of operators  
        if(!found) {
            i = 0;
        } 
        // calling function doMath to perform the operation, passing i number, and i + 1 number, and
        // the found operator, it can be either 0 or a specific index refered to a / or *, the first found
        result = doMath(number[i], number[i + 1], op[i]);
        // after that, we overwrite the number in i+1 with result
        number[i + 1] = result;
        // remove the number in I position
        number.splice(i, 1);
        // and remove the used operator
        op.splice(i,1);
    }

    // return final result
    return result;
}

// perform a math operation according to +, -, / or multiplication
function doMath(n1, n2, op) {
    let r;
    switch(op) {
        case '+':
            r = n1 + n2;
            break;
        case '-':
            r = n1 - n2;
            break;
        case '/':
            r = n1 / n2;
            break;
        case '*':
            r = n1 * n2;
            break;
    }
    return r;
}

// return fatorial of a number
function fatorial(n) {
    let fat = 1;
    for(let i = n; i >= 1; i--) {
        fat*=i;
    }
    return fat;
}

// if a operator sign return true, othewise, false
function operatorSign(c) {
    return (c == '+' || c == '-' || c == '/' || c == '*');
}

// move carot to the end of the input
function moveCarot() {
    screen = document.getElementById('screen');
    // trigger the event of focus, as if the mouse were selecting something
    screen.focus();
    // setting the selection start and the selection end to the length of the screen, so
    // when we type nome number or operator, etc. the cursor is going to follow the legth.
    screen.selectionStart = screen.selectionEnd = screen.value.length;
}

function getLastDigitedNumber() {
    // function to control where the number starts, since it ends in the last character
    let i = 0;
    // variable to save the number backwards   
    let number = "";
    // for goes from back to the front  
    for(i = expression.length - 1; i >= 0; i--) {
        // if the expression is difirrent of ' ', it means that we have a number yet
        // otherwise, this is near a operator, because a operator has two spaces.
        // one before it and after it 
        if(expression.charAt(i) != ' ') {
            // concatanate the numbers
            number+=expression.charAt(i);
        } else {
            // othewise, break, the number is now complete
            break;
        }
    }

    // removing that number from the original expression
    // i is where the space were found, or if there's only one number, no space
    // were found, but i has the number of 0, because the for loop was not interrupted with a break
    // since substring uses a legth as a second parameter, it's i + 1, so that we can take a substring inclding this
    // space or not, if it has only one number. [start, end]
    expression = expression.substring(0, i + 1);

    // reversing the number that was obtained. (the number is in the reversed order, so it must be fixed)
    let finalNumber = "";
    for(i = number.length - 1; i >= 0; i--) {
        finalNumber+=number.charAt(i);
    }
    // returning this number
    return finalNumber;
}

// function used to check if there's a dot or not, so if there's a dot,
// we indeed cannot add a dot to the final result, but let's say, that there isn't any
// dot, and we want to add it, so we can set dot to false, because before the calculation, 
// the last value digited was a number, so dot is still with the value of true, and now we
// update it to false.
function thereisDot(str) {
    let found = false;
    // run through all the expression
    for(let i = 0; i < str.length; i++) {
        // if the char at i is dot, stop
        if(str.charAt(i) == ".") {
            found = true; // there's a dot
            break;
        }
    }
    // otherwise, there's any dot, so return false
    return found;
}

