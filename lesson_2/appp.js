//повторение
// var userLogin = 'bekovaA';
// var userPassword = 'qwerty123';
// var loginInput = prompt('введите логин: ');
// var passwordInput = prompt('введите пароль: ');
// if(userLogin === loginInput && userPassword === passwordInput){
//     alert('Авторизация прошла успешно, доступ разрешен!')
// }else {
//     alert('Пользователь не найден, повторите попытку!')
// }

// var userINN = '20810200300758';
// var innFirstNumber = Number(userINN[0]) //2
// if ((
//     innFirstNumber === 0 || innFirstNumber === 1 || innFirstNumber === 2) && userINN.length === 14) {
//     console.log('INN is valid');
// } else {
//     console.error('error')
// }
//
// var size = 's';
// var euSize = 0;
// if (size === 'S' || size === 's') {
//     console.log('европейский размер S - ', euSize = 36)
// } else if (size === 'M' || size === 'm') {
//     console.log('европейский размер M - ', euSize = 38)
// } else if (size === 'L' || size === 'l') {
//     console.log('европейский размер L - ', euSize = 40)
// } else {
//     console.log('такого размера нет')
// }

//switch..case
// switch (size) {
//     case 'S':
//     case 's':
//         console.log('small')
//         break;
//     case 'M':
//     case 'm':
//         console.log('medium')
//         break;
//     case 'L':
//     case 'l':
//         console.log('large')
//         break;
//     default:
//         console.log('unknow size')
// }

//NaN - not a number не число
// console.log(typeof NaN)

//4) undefined - неопределенный тип данных
let name;
// console.log(name)
//5) null - нулевой тип данных
// var surname = null;
// console.log(typeof null)
//6) object - объект или комплексный тип данных
var user = {
    name: 'Aidana',
    surname: 'Bekova',
    number: 996708456724,
    phoneNumber: null,
    isMarried: false,
    age: undefined,
    laptop: {
        model: 'macbook',
        cheap: 'm1',
        mous: false
    },
    profession: {}
    // name: 'Aliya'
}
console.log( typeof user)
console.log(user.laptop.cheap)
console.log(user.isMarried, user.phoneNumber)
console.log(user.name);

/*
* 3 класса (вида) операторов:
* 1)унарные операторы - +(из строки в число), !(лог-ое не), -(из полож числа превращает в отприц)
* 2)бинарные операторы - &&, ||, + (прибавление)
* 3)тернарные операторы
* */

//true - white, false-black
var playerColor = false;
// console.log(playerColor ? 'You start...' : 'Wait your enemy')


var manOrWomen = false;
if(manOrWomen === true){
    console.log('Дорогой');
}else if(manOrWomen === false){
    console.log('Дорогая');
} else {
    console.log('оно')
}
//код выше с помощью тернарных операторов
var operation = manOrWomen ? 'Дорогой' : 'Дорогая'
console.log(operation)










