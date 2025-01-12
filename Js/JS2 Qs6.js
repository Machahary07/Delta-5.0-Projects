//Qs6 (Bonus). WAP to check if 2 numbers have the same last digit. Eg: 32 and 47852 have the same last digit i.e. 2.
function checkLastDigit() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    if (!num1 || !num2) {
        document.getElementById('result').innerText = "Please enter both numbers.";
        return;
    }
    const lastDigitNum1 = num1 % 10;
    const lastDigitNum2 = num2 % 10;
    if (lastDigitNum1 === lastDigitNum2) {
        document.getElementById('result').innerText = `Yes, ${num1} and ${num2} have the same last digit.`;
    } else {
        document.getElementById('result').innerText = `No, ${num1} and ${num2} do not have the same last digit.`;
    }
}