/* 
Function: Dice Roll
Inputs: None
Outputs: Dice roll results - INTEGER
*/
function diceRoll(){

//Output dice roll results to words
    switch(Math.floor((Math.random() * 6)) + 1)
    {
        case 1:
            return "One";
            break;
        case 2:
            return "Two";
            break;
        case 3:
            return "Three";
            break;
        case 4:
            return "Four";
            break;
        case 5:
            return "Five";
            break;
        case 6:
            return "Six";
            break;
        default:
            return "An invalid number";
            break;
    }
}

//Main Runtime
console.log('The dice has rolled: ' + diceRoll());

