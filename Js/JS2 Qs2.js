// Qs2. Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert 
//     (by substituting their name & age): name is age years old. [ Use template Literals to print thissentence ]

// function takeUserInput() {
    // const name = prompt("Please enter your name");
    // const age = prompt("Please enter your age");
    // if (name !== null && age !== null) {
        // if (!isNaN(age) && age > 0) {
            // alert(`${name} is ${age} years old.`);
        // } else {
            // alert("Invalid age. Please enter a positive number.");
        // }
    // }
// }
// takeUserInput();
    // takeUserInput();

function takeUserInput() {
    const name = prompt('Please enter you name');
    const age = prompt('Please enter your age');
    if (name !== null && age !== null) {
        if (!isNaN(age) && age > 0) {
            alert(`${name} is ${age} years old.`);
        }
    }
}