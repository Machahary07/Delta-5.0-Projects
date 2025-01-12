//Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
// 1 = Monday, 2 = Tuesday and so on..
function askDay() {
    const day = prompt('Enter week day no. (1-7)');
    switch (day) {
        case '1':
            alert('Monday');
            break;
        case '2':
            alert('Tuesday');
            break;
        case '3':
            alert('Wednesday');
            break;
        case '4':
            alert('Thursday');
            break;
        case '5':
            alert('Friday');
            break;
        case '6':
            alert('Saturday');
            break;
        case '7':
            alert('Sunday, Fun day!');
            break;
        default:
            alert('Wrong day number');
            break;
    }
    askDay(); // Recursively call the function to ask again
}

askDay(); // Start the process