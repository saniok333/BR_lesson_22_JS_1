let deposit_amount = Number(prompt("Enter the deposit amount"));
let month_amount = Number(prompt("Enter the month amount"));
let interest = 0;
for (let i = 0; i < month_amount; i++) {
    interest = interest + (deposit_amount * 0.05) / 12;
    deposit_amount = deposit_amount + interest;
}
alert("In " + month_amount + " months your interest will be:" + interest);