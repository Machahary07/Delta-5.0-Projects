// Qs3. Write a switch statement to print the months in a quarter.
//     Months in Quarter1: January, February, March 
//     Months in Quarter2: April, May, June 
//     Months in Quarter3: July, August, September 
//     Months in Quarter4: October, November, December [ Use the number as the case value in switch ]

function printMonthsInQuarter() {
    const quarter = parseInt(document.getElementById('quarter').value); // used getElementById in place of parseInt for the html
    const resultElement = document.getElementById('result');
    switch (quarter) {
        case 1:
            resultElement.innerText = "Months in Quarter 1: January, February, March";
            break;
        case 2:
            resultElement.innerText = "Months in Quarter 2: April, May, June";
            break;
        case 3:
            resultElement.innerText = "Months in Quarter 3: July, August, September";
            break;
        case 4:
            resultElement.innerText = "Months in Quarter 4: October, November, December";
            break;
    }
}

//normal code
// Parse input to an integer
// function printMonthsInQuarter() {
    // const quarter = parseInt(prompt('Enter quarter (1, 2, 3, 4):')); 
    // switch (quarter) {
        // case 1:
            // console.log("Months in Quarter1: January, February, March");
            // break;
        // case 2:
            // console.log("Months in Quarter2: April, May, June");
            // break;
        // case 3:
            // console.log("Months in Quarter3: July, August, September");
            // break;
        // case 4:
            // console.log("Months in Quarter4: October, November, December");
            // break;
        // default:
            // console.log("Invalid input. Please enter a number between 1 and 4.");
    // }
// }
// printMonthsInQuarter(); 