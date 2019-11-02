const amount_of_money = prompt("How much money do You have in your wallet?");
const prise_of_chocolate = prompt("How much does chocolate bar cost?");
alert(
    "Quantity of chocolate bars You can buy: " +
    (amount_of_money - (amount_of_money % prise_of_chocolate)) /
    prise_of_chocolate
);