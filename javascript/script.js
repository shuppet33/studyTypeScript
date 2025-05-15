"use strict";
console.log('LOOOG');
console.log('LOOOG', 1);
// Типы данных
let numEmpty;
numEmpty = 99;
let num = 4;
let str = 'aaaa';
let bool = false;
let typeAny = ''; // любой тип данных (!!!)
let arrNum = [1, 2];
let arrStr = ['aaa', "aaa"];
let arrNumStr = [1, ''];
let cArrStr = ['aaa', 'aaa'];
let cArrNum = [1, 1, 1, 1];
let arrArrayNum = [1, 1, 1]; // <> - дженерик (параметр для типа, как функция типо)
// Tuple
let contact = ['Alena', 1234567];
function sayMyName(name) {
    console.log('LOOOG', name);
}
// Never
// когда функция возвращает ошибку и никогда не заканчивает свое выполнение | функция постоянно что то делает
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
const login = 'admin';
const id1 = 1234;
const id2 = '1234';
const sumKeys = (keys) => keys.a + keys.b;
const s = { a: 2, b: 4 };
sumKeys(s);
// const rect: Rect = () => {
//
// }
// rect.color = 23;
const rect1 = {
    id: '01',
    size: {
        width: 120,
        height: 30,
    },
    color: '#000',
};
const rect2 = {}; // Строго приведен к типу Rect
const rect3 = {}; // тоже самое что as Rect
const sum = () => 2;
const rect4 = {
    id: '123',
    size: {
        width: 20,
        height: 20,
    },
    getArea() {
        return this.size.width + this.size.height; // 400
    }
};
class Clock {
    time = new Date();
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid #000',
    marginTop: '2px',
    borderRadius: '5px'
};
// enum | Енум
// это вспомогательная сущность для структурирования кода, в котором присутствуют однотипные элементы
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Simple; // 0
const membershipReverse = Membership[2]; // 'Premium'
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.FACEBOOK; // 'FACEBOOK'
// Функции
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
// реализация функции
const position = (a, b) => {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
};
// Классы
class Typescript {
    version;
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `${name}: Typescript version is ${this.version}`;
    }
}
class Car1 {
    // поля
    model;
    numberOfWheels = 4;
    // конструктор
    constructor(theModel) {
        this.model = theModel;
    }
}
// тоже самое что и выше
class Car2 {
    model;
    numberOfWheels = 4;
    constructor(model) {
        this.model = model;
    }
}
// Модификаторы
class Animal {
    voice = ''; // protected - данное поле доступно в Animal и во всех наследуемых классах от Animal
    color = 'black'; // public - доступны для всех
    go() {
        console.log('go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice; // имеем доступ к voice в Animal с помощью setVoice, подругому никак
    }
}
const cat = new Cat(); // {voice: '', color: 'black'}
// cat.voice не сработает
// Абстрактные классы
// не компилируются, нужны для наследования
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('LOOOG');
    }
    info() {
        return 'This is info()';
    }
}
// Guard | Гуард
// вспомогательные конструкции для работы с типами
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponce {
    header = 'res header';
    result = 'res result';
}
class MyError {
    header = 'err header';
    message;
}
function handle(res) {
    if (res instanceof MyResponce) {
        return { info: res.header + res.result };
    }
    else {
        return { info: res.header + res.message };
    }
}
function setAlertType(type) {
    // .....
}
setAlertType('success');
setAlertType('warning');
// setAlertType('defailt') // ошибка
// Generic | Дженерик
//# sourceMappingURL=script.js.map