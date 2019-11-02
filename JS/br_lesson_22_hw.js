// const name = prompt("Waht is your name?");
// alert("Hello, " + name);

// const curr_year = 2019;
// const year_of_birth = prompt("Waht year were You born in?");
// alert("Your age is, " + (curr_year - year_of_birth));

// const length_of_side = prompt(
//   "Enter the length of the side of the square please."
// );
// alert("The squre area is " + length_of_side ** 2);

// const circle_radius = prompt("Enter the circle radius please.");
// alert("The circle area is " + Math.PI * circle_radius ** 2);

// const distance = prompt("Enter the distance between cities in kilometres.");
// const time = prompt("Enter the time in hours you would like to get there.");
// alert("Your speed should be " + distance / time + "km/h");

// const dollar_amount = prompt("Enter the amount in United States dollars.");
// const exchange_rate = 0.83;
// alert("Your amount in EUR is " + exchange_rate * dollar_amount);

// const disk_capacity = prompt("Enter the removable disk capacity in GB");
// alert(
//   "Number of files with size 820MB :" +
//     (disk_capacity * 1024 - ((disk_capacity * 1024) % 820)) / 820
// );

// const amount_of_money = prompt("How much money do You have in your wallet?");
// const prise_of_chocolate = prompt("How much does chocolate bar cost?");
// alert(
//   "Quantity of chocolate bars You can buy: " +
//     (amount_of_money - (amount_of_money % prise_of_chocolate)) /
//       prise_of_chocolate
// );

// let three_digit_number = prompt("Enter three-digit number please");
// if (three_digit_number >= 1000 || three_digit_number <= 100)
//   alert("You entered not a three-digit number.");
// else {
//   let result_tdn = "";
//   for (let i = 0; i < 3; i++) {
//     result_tdn = result_tdn + (three_digit_number % 10);
//     three_digit_number = (three_digit_number - (three_digit_number % 10)) / 10;
//   }
//   alert("New number:" + result_tdn);
// }

let deposit_amount = Number(prompt("Enter the deposit amount"));
let month_amount = Number(prompt("Enter the month amount"));
let interest = 0;
for (let i = 0; i < month_amount; i++) {
  interest = interest + (deposit_amount * 0.05) / 12;
  deposit_amount = deposit_amount + interest;
}
alert("In " + month_amount + " months your interest will be:" + interest);
