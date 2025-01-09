// 1. A good string is a string that starts with the letter 'a' & has a length > 3.
// WAP to find if a string is good or not.

const string = prompt('Enter your string...');

if (string[0] === 'a' && string.length > 3) {
    console.log('Good string');
}

else {
    console.log('Not a good string');
}