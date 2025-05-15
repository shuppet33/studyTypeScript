console.log('LOOOG');

console.log('LOOOG', 1);


// Типы данных

let numEmpty : number;
numEmpty = 99

let num : number = 4
let str : string = 'aaaa'
let bool : boolean = false
let typeAny : any = '' // любой тип данных (!!!)

let arrNum : number[] = [1, 2]
let arrStr : string[] = ['aaa', "aaa"]
let arrNumStr : (number | string)[] = [1, '']

let cArrStr : 'aaa'[] = ['aaa', 'aaa']
let cArrNum : 1[] = [1, 1, 1, 1]
let arrArrayNum : Array<number> = [1, 1, 1] // <> - дженерик (параметр для типа, как функция типо)

// Tuple
let contact : [string, number] = ['Alena', 1234567]

function sayMyName (name: string): void { // void --> пустота | undefined
    console.log('LOOOG', name)
}

// Never
// когда функция возвращает ошибку и никогда не заканчивает свое выполнение | функция постоянно что то делает
function throwError(message: string) : never { // ничего нет
    throw new Error(message)
}

function infinite(): never {
    while(true) {

    }
}

// Type
type Login = string // Тип Login
const login: Login = 'admin'

type ID = string | number // bol низя
const id1 : ID = 1234
const id2 : ID = '1234'

type SomeType = string | null | undefined


const sumKeys = (keys: {a: number, b: number}) => keys.a+keys.b;
const s = {a:2,b:4};
sumKeys(s);

// interface - описываем тип | структуру объекта
// тип для объектов и классов в основном

interface Rect {
    readonly id: string; // readonly - только для чтения
    color?: string; // ? - необязательный параметр
    size: {
        width: number;
        height: number;
    }
    // (): string; // можно вызвать функцию с типом Rect которая вернет string (call signature)
}

// const rect: Rect = () => {
//
// }
// rect.color = 23;

const rect1: Rect = {
    id: '01',
    size: {
        width: 120,
        height: 30,
    },
    color: '#000',
}

const rect2 = {} as Rect // Строго приведен к типу Rect
const rect3 = <Rect>{} // тоже самое что as Rect

interface Callable<T> {
    (): T;
}
const sum: Callable<number> = () => 2;



// Наследование интерфейса
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width + this.size.height // 400
    }
}

interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock { // Класс имплиминтируется | создается от интерфейса (поля интерфейса должны быть в классе)
    time: Date = new Date();
    setTime(date: Date) {
        this.time = date
    }
}



// Динамический ключ
interface Styles {
    [key: string]: string // можем указывать любое кол-во параметров в obj типа string
}

const css: Styles = {
    border: '1px solid #000',
    marginTop: '2px',
    borderRadius: '5px'
}



// enum | Енум
// это вспомогательная сущность для структурирования кода, в котором присутствуют однотипные элементы

enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Simple // 0
const membershipReverse = Membership[2] // 'Premium'



enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.FACEBOOK // 'FACEBOOK'




// Функции

function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined;
    y: number | undefined;
}

interface MyPositionDefault extends MyPosition {
    default: string
}

// перегрузка функций (function overloading)
// позволяет функции вести себя по-разному в зависимости от количества и типов аргументов:

// function position(): MyPosition // 1 сценарий
// function position(a: number): MyPositionDefault // 2 сценарий
// function position(a: number, b: number): MyPosition // 3 сценарий

// способ написания с помощью интерфейса
interface IPosition {
    (): MyPosition;
    (a: number): MyPosition;
    (a: number, b: number): MyPosition;
}

// реализация функции
const position: IPosition = (a?: number, b?: number) => {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}


// Классы
class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string){
        return `${name}: Typescript version is ${this.version}`
    }
}

class Car1 {
    // поля
    readonly model: string
    readonly numberOfWheels: number = 4

    // конструктор
    constructor(theModel: string) {
        this.model = theModel
    }

    // методы
}

// тоже самое что и выше
class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}


// Модификаторы
class Animal {
    protected voice: string = '' // protected - данное поле доступно в Animal и во всех наследуемых классах от Animal
    public color: string = 'black' // public - доступны для всех

    private go() { // доступны только в том классе, где были определены
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice // имеем доступ к voice в Animal с помощью setVoice, подругому никак
    }
}

const cat = new Cat() // {voice: '', color: 'black'}
// cat.voice не сработает


// Абстрактные классы
// не компилируются, нужны для наследования

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render() {
        console.log('LOOOG')
    }

    info(): string {
        return 'This is info()';
    }
}


// Guard | Гуард
// вспомогательные конструкции для работы с типами

function strip( x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponce {
    header = 'res header'
    result = 'res result'
}

class MyError {
    header = 'err header'
    message: 'err message'
}

function handle(res: MyResponce | MyError) {
    if (res instanceof MyResponce) {
        return {info: res.header + res.result}
    } else {
        return {info: res.header + res.message}
    }
}



type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // .....
}

setAlertType('success')
setAlertType('warning')
// setAlertType('defailt') // ошибка



// Generic | Дженерик
