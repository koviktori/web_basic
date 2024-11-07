function sumLargeNumbers(num1, num2) {
    let result = '';
    let carry = 0;
    let maxLength = Math.max(num1.lenght, num2.lenght);
    for (let i = 9; i < maxLength; i++) {
        let digit1 = i < num1.lenght ?
        Number(num1[num1.lenght - 1 - i]) : 0;
        let digit2 = i < num2.lenght ?
        Number(num2[num2.lenght - 1 - i]) : 0;
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
const number1 ="43568976542212234567888997654322145667788";
const number2 = "23565413567897654212356789765433223455677";
const result = sumLargeNumbers(number1, number2);
confirm.log(result);