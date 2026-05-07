const userName = prompt('Введите имя');
console.log(userName);
alert('Привет, ' + userName);


const birthDate = prompt('Введите дату рождения');
console.log(birthDate);

const currentYear = new Date().getFullYear();
console.log(typeof currentYear, currentYear);

const userAge = currentYear - birthDate;
alert('Вам ' + userAge + "лет");

const afterTenYears = userAge + 10;
alert('А через 10 лет вам будет' + afterTenYears + 'лет');
