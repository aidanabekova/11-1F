//строчный комментарий
//переменные в JS
// var name = 'Aidana'
// var surname = 'Bekova'
//camelcase
var getUserId;
// console.log('Мое ФИО - ', name + ' ' + surname) //конкатенация
//escaping - экранирование строк
var direction = 'Разработка сайтов'
var profession = 'Фронтенд-разработка'
// console.log('Сфера разработки - ', direction, '\n\tа именно - ' + profession)

//типы данных
//1)string - строковый тип данных
var firstNumber = '1234567';
// console.log(typeof firstNumber)
//2)number - числовой тип данных
// var number2 = 1234567;
// console.log(typeof number2)

var a = 12;
var b = 34;
//математические действия - +, -, /, *, **, %
// console.log('12 - 34 =', a - b);
// console.log('12 + 34 =', a + b);
// console.log('12 / 34 =', a / b);
// console.log('12 * 34 =', a * b);
// console.log('12 ** 34 =', a ** b);
// console.log('12 % 34 =', a % b);

//вычисление среднего возраста
// console.log('Средний возраст группы 11-1F - ', ((20 + 24 + 32 + 16 + 26 + 20) / 6), 'года');

//prompt, alert - модальная функция для взаимодействия с пользователем
// var num1 = Number(prompt('Введите первое число: '))
// var num2 = Number(prompt("Введите второе число: "))
// console.log('первое число - ', num1)
// console.log('второе число - ', num2)
// // console.warn('+ =', num1 + num2)
// console.error('* =', num1 * num2)

//3) boolean - логический тип данных, true or false
// var manOrWomen = 'false';
// if(manOrWomen === true){
//     console.log('Дорогой');
// }else if(manOrWomen === false){
//     console.log('Дорогая');
// } else {
//     console.log('оно')
// }
//условные операторы - if, else if, else
// var name = prompt('Введите свое имя: ') //айдана
// var surname = prompt('введите свою фамилию: ') //бекова
// var age = Number(prompt('введите свой возраст: ')) //еснлесенсл 456
// if(age <= 18){
//     console.log('Хай', name)
// }else if(age >= 19 && age <= 40) {
//     console.log('Здравствуйте! ', surname + ' ' + name)
// }else if(age >= 41 && age <= 80){
//     console.log('Добро пожаловать!', surname + ' ' + name)
// }else {
//     console.error('Что-то пошло не так! Введите возраст цифрами')
// }


var number1 = '15';
var number2 = 15;
console.log(number1 === number2) //=== - строгое сравнения, == - нестрогое сравнение



