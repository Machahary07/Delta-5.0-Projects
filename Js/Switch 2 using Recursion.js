// Qs3. Write a switch statement to print the months in a quarter.
//     Months in Quarter1: January, February, March 
//     Months in Quarter2: April, May, June 
//     Months in Quarter3: July, August, September 
//     Months in Quarter4: October, November, December [ Use the number as the case value in switch ]

function printMonthsInQuarter(quarter) {
    const quarter = prompt('Enter quarter (1,2,3,4)');
    switch (quarter) {
        case 1:
            console.log("Months in Quarter1: January, February, March");
            break;
        case 2:
            console.log("Months in Quarter2: April, May, June");
            break;
        case 3:
            console.log("Months in Quarter3: July, August, September");
            break;
        case 4:
            console.log("Months in Quarter4: October, November, December");
            break;
}
}