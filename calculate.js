const number1 = prompt('enter first number', 2);
const number2 = prompt('enter second number', 3);
const summa = +number1 + +number2;
alert('summa =' + summa);


const productName1 = prompt('enter name of product');
const productPrice1 = prompt('enter price of' + productName1);
const productName2 = prompt('enter name of product');
const productPrice2 = prompt('enter price of' + productName2);

const totalPrice = Number(productPrice1) + Number(productPrice2);
const productInfo1 = productName1 + ' - ' + productPrice1 + '$\n';
const productInfo2 = productName2 + ' - ' + productPrice2 + '$\n';
const totalInfo = 'you need to pay - ' + totalPrice + '$\n';
alert('you bought:\n' + productInfo1+productInfo2+totalInfo);
