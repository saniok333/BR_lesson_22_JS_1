let three_digit_number = prompt("Enter three-digit number please");
if (three_digit_number >= 1000 || three_digit_number <= 100)
    alert("You entered not a three-digit number.");
else {
    let result_tdn = "";
    for (let i = 0; i < 3; i++) {
        result_tdn = result_tdn + (three_digit_number % 10);
        three_digit_number = (three_digit_number - (three_digit_number % 10)) / 10;
    }
    alert("New number:" + result_tdn);
}