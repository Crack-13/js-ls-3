// 1. Создайте объект person с полями name, age и job. Присвойте полям значения, например, "John", 25 и "developer" соответственно.

// let men = {
//     name: 'Steve',
//     age: 26,
//     job: 'developer'
// }

// 2. Создайте объект car с полями brand, model, year и color. 
// Присвойте полям значения, например, "Toyota", "Camry", 2020 и "blue" соответственно.

// let car = {
//     brand: 'Lada',
//     model: 'Granta',
//     year: 2019,
//     color: 'black'
// }

// 1. Создайте функцию-конструктор Person с параметрами name, age и job. 
// Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

// function Person (name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job
// }

// let person = new Person ('Larry', 174, 'killer')   дожил до такой старости, дед хорош

// 2. Создайте функцию-конструктор Car с параметрами brand, model, year и color. 
// Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

// function Car (brand, model, year, color) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color
// }

// let car = new Car ('Tractor', 'power', 1873, 'red')   cамая лучшая техника этого года, покупайте


// 3. Изменение свойств объекта

    // men.name = 'Smitt';
    // car.color = 'blue';
    // person['age'] = 10;
    // car['year'] = 2018

// 4. Добавление новых свойств в объект

    // person.city = 'Grozny'
    // car['size'] = 'small'

// 5. удаление свойств из объекта

    // delete person.name;
    // delete car.model;




// 1. Создайте объект "person" с свойствами "name", "age" и методом "greet", который выводит на экран приветствие с именем.

// let person = {
//     name: 'Chupik',
//     age: 13,
//     greet: function() {
//         console.log('Hi, my name is ' + this.name)
//     }
// }
// person.greet()

// 2. Создайте объект "calculator" с методами "add", "subtract", "multiply" и "divide", 
// которые принимают два аргумента и возвращают результат операции.

// let calculator = {
//     add: function(a, b) {
//         return a + b
//     },
//     subtract: function(c, d) {
//         return c - d
//     },
//     multiply: function(e, f) {
//         return e * f
//     },
//     divide: function(g, h) {
//         return g / h
//     }
// }
// calculator.add(2, 3)
// calculator.subtract(8, 5)
// calculator.multiply(4, 4)
// calculator.divide(5, 10)

// 3. Создайте объект "car" с методом "start", который выводит на экран сообщение о том, что машина запущена, 
// и методом "stop", который выводит на экран сообщение о том, что машина остановлена.

// let car = {
//     start: function() {
//         alert('Машина запущена')
//     },
//     stop: function() {
//         alert('Машина остановлена')
//     }
// }
// car.start()
// car.stop()




// 1. Создайте объект-прототип "person" с свойствами "name" и "age". 
// Создайте объект "john" на основе этого прототипа и задайте ему свойства "name" и "age".

// let person = {
//     name: '',
//     age: 0
// }
// let John = Object.create(person)
// John.name = 'John'
// John.age = 33

// 2. Создайте объект-прототип "animal" с методом "eat", который выводит на экран сообщение о том, что животное хавает. 
// Создайте объект "dog" на основе этого прототипа и вызовите метод "eat".

//  

// 3. Создайте объект-прототип "shape" с методом "draw", который выводит на экран сообщение о том, что фигура рисуется. 
// Создайте объект "rectangle" на основе этого прототипа и вызовите метод "draw"

// let shape = {
//     draw: function() {
//         alert('Фигура рисуется')
//     }
// }
// let rectangle = Object.create(shape)
// rectangle.draw()






// 1. создайте 4 разных массивов используя все 3 способа которые были показаны в видео.

// let fruits = ['banana', 'ananas', 'qiwi']
// let numbers = [1, 2, 3, 4, 5]
// let mixed = ['hello', 123, false]

// // const emptyArray = new Array()
// // const arrayWithLength = new Array(5)

// const str = "hello"
// const arr = Array.from(str)

// const psevdoArray = {
//     length: 3,
//     0: 'a',
//     1: 'b',
//     2: 'c'
// }
// const Array = Array.from(psevdoArray)

// 2. Используя методы  push, pop, shift, unshift.
// Измените ваши массивы удалите что то из массива, добавьте что то в массив.

// numbers.pop()
// numbers.push(5)
// numbers.shift()
// numbers.unshift(0)



// slice()

// 1. Создайте массив из чисел. Используя метод `slice`, создайте новый массив, содержащий первые три элемента исходного массива.

// const numbers = [1, 2, 3, 4, 5]

// const subArray = numbers.slice(0, 3)

// 2. Создайте строку из слов. Используя метод `slice`, создайте новую строку, содержащую первые три слова исходной строки.

// const string = ['sfsf', 'hrhr', 'wfwfe', 'qwdqw']

// const subArray = string.slice(0, 3)

// 3. Создайте массив из строк. Используя метод `slice`, создайте новый массив, содержащий элементы исходного массива, начиная с третьего элемента и заканчивая пятым.

// const string = ['sfsf', 'hrhr', 'wfwfe', 'qwdqw', 'pgpgp']

// const subArray = string.slice(2, 5)

// 4. Создайте строку из символов. Используя метод `slice`, создайте новую строку, содержащую символы исходной строки, начиная со второго символа и заканчивая четвертым.

// const str = 'abcdef'

// const subArray = str.slice(1, 4)

// 5. Создайте массив из объектов. Используя метод `slice`, создайте новый массив, содержащий первые два объекта исходного массива.

// const person = [ 
//     {
//         name: 'Putin',
//         age: 11,
//       },
//       {
//         name: 'Peter',
//         age: 9,
//       },
//       {
//         name: 'Rei',
//         age: 12,
//       },
//  ]
// const subObject = Array.from(person.slice(0, 2))


// splice()

// 1. Создайте массив из чисел. Используя метод `splice`, удалите первый элемент массива.

// const numbers = [1, 2, 3, 4, 5]

// numbers.splice(0, 1)

// 2. Создайте строку из слов. Используя метод `splice`, удалите первое слово строки.

// const str = 'Hello, world'

// str.splice(0, 5)

// 3. Создайте массив из строк. Используя метод `splice`, удалите элемент массива, расположенный на второй позиции.

// const str = ['word', 'symbol', 'number']

// str.splice(1, 1)

// 4. Создайте строку из символов. Используя метод `splice`, удалите первые три символа строки.

// const str = 'abc321'

// str.splice(0, 3)

// 5. Создайте массив из объектов. Используя метод `splice`, удалите первый объект из массива.

// const person = [ 
//     {
//         name: 'Alex',
//         age: 43,
//       },
//       {
//         name: 'Max',
//         age: 22,
//       },
//       {
//         name: 'Shizik',
//         age: 12,
//       },
// ]
// const subObject = Array.from(person.splice(0, 1))


// concat()

// 1. Создайте два массива из чисел. Используя метод `concat`, объедините эти массивы в один.

// const numbers = [1, 2, 3]
// const letters = ['a', 'b', 'c']

// const combine = numbers.concat(letters)

// 2. Создайте две строки из слов. Используя метод `concat`, объедините эти строки в одну.

// const str1 = 'abcdef'
// const str2 = 'ghtjo'

// const combine = str1.concat(str2)

// 3. Создайте два массива из строк. Используя метод `concat`, объедините эти массивы в один.

// const arrStr1 = ['words']
// const arrStr2 = ['symbols']


// 4. Создайте две строки из символов. Используя метод `concat`, объедините эти строки в одну.

// const string = 'true321'
// const string1 = 'false123'

// const combine = string.concat(string1)

// 5. Создайте массив из чисел и строк. Используя метод `concat`, добавьте к массиву новый элемент – массив из трех чисел.

// const mixed = ['abcdef', 2424]
// const num = [1, 2, 4]

// const combine = mixed.concat(num)


// map()

// 1. Создайте массив из чисел. Используя метод `map`, создайте новый массив, в котором каждый элемент будет увеличен на 1.

// const numbers = [1, 2, 3, 4, 5]
// const addNumber = numbers.map(function(number) {
//     return number + 1
// })

// 2. Создайте массив из строк. Используя метод `map`, создайте новый массив, в котором каждая строка будет записана в верхнем регистре.

// const string = ['abc', 'def', 'ght']
// const toUpperCase = string.map(function(tp) {
//     return tp.toUpperCase()
// })

// 3. Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод `map`,
// создайте новый массив, в котором каждый объект будет иметь дополнительное свойство "fullName", содержащее имя и возраст объекта.

// const arrObj = [{
//     name: '',
//     age: 0
// }]
// const object = arrObj.map(function(fullName) { // не смог решить в течении 2-х часов
//    fullName = 
// })

// 4. Создайте массив из чисел. Используя метод `map`, создайте новый массив, в котором каждый элемент будет возведен в квадрат.

// const numbers = [1, 2, 3, 4, 5]
// const addNumber = numbers.map(function(number) {
//     return number **
// })

// 5. Создайте массив из строк. Используя метод `map`, создайте новый массив, в котором каждая строка будет записана в нижнем регистре.

// const string = ['ABC', 'DEF', 'GHT']
// const toLowerCase = string.map(function(tp) {
//     return tp.toLowerCase()
// })



// filter()

// 1. Напишите функцию, которая принимает массив чисел и возвращает только четные числа из этого массива, используя метод `filter`

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0
// }) 

// 2. Напишите функцию, которая принимает массив строк и возвращает только те строки, длина которых больше или равна 5, используя метод `filter`

// const str = ['ddddd', 'wdew', 'wdwdwefw', 'we', 'qdwerr']
// const strLengthFive = str.filter(function(string) {
//     return string.length >= 5
// })
// console.log(strLengthFive)

// 3. Напишите функцию, которая принимает массив объектов и возвращает только те объекты, у которых свойство `price` больше 1000, используя метод `filter`

// const arr = [
//     {
//         price: 1000
//       },
//       {
//         price: 690
//       },
//       {
//         price: 1233
//       },
// ]
// const arrObj = arr.filter(function(array) {
//     return array.price >= 1000
// })



// reduce()

// 1. Создайте массив из чисел. Используя метод `reduce`, вычислите сумму всех элементов массива.

// const numbers = [1, 2, 3, 4, 5, 6]
// const sum = numbers.reduce(function(arrNum, currentValue) {
//     return arrNum + currentValue
// })

// 2. Создайте массив из строк. Используя метод `reduce`, объедините все строки в одну строку.

// const str = ['sefwf', 'wfewf', 'wfewef']
// const total = str.reduce(function(arrStr, currentValue) {
//     return arrStr + currentValue
// })

// 3. Создайте массив из чисел. Используя метод `reduce`, вычислите произведение всех элементов массива.

// const numbers = [1, 2, 3, 4, 5, 6]
// const sum = numbers.reduce(function(arrNum, currentValue) {
//     return arrNum * currentValue
// })


// 4. Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод `reduce`, вычислите средний возраст всех объектов в массиве.

// const person = [
//     {
//         name: 'Liliput',
//         age: 20
//     },
//     {
//         name: 'Goblin',
//         age: 32
//     },
//     {
//         name: 'Troll',
//         age: 189
//     }
// ]
// const result = person.reduce(function(arrObj, currentValue, f) {
//     return arrObj + currentValue / f.age
// })

// 5. Создайте массив из чисел. Используя метод `reduce`, вычислите сумму всех четных элементов массива.

// const numbers = [1, 2, 3, 4, 5, 6]
// const sum = numbers.reduce(function(even, currentValue) {
//     return even += currentValue % 2 
// })
// console.log(sum)


// sort()

// 1. Создайте массив из чисел. Используя метод `sort`, отсортируйте его по возрастанию.

// const numbers = [2, 3, 9, 5, 1, 4, 8]
// numbers.sort()

// 2. Создайте массив из строк. Используя метод `sort`, отсортируйте его в алфавитном порядке.

// const string = ['bfewf', 'aervsa', 'eawefwf', 'caefw', 'darfaf']
// string.sort()

// 3. Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". 
// Используя метод `sort`, отсортируйте массив по возрастанию возраста объектов.

// const person = [
//         {
//             name: 'Sun',
//             age: 98
//         },
//         {
//             name: 'Mouse',
//             age: 32
//         },
//         {
//             name: 'Gorilla',
//             age: 189
//         }
//     ]
// person.sort(function(a, b) {
//     return a.age - b.age
// })

// 4. Создайте массив из чисел. Используя метод `sort`, отсортируйте его по убыванию.

// const numbers = [2, 3, 9, 5, 1, 4, 8]
// numbers.sort(function(a, b) {
//     return b - a 
// })

// 5. Создайте массив из строк. Используя метод `sort`, отсортируйте его в обратном алфавитном порядке.

// const string = ['bfewf', 'aervsa', 'eawefwf', 'caefw', 'darfaf']
// string.sort(function(a, b) {
//     return b - a
// })


// forEach()

// 1. Создайте массив из чисел. Используя метод `forEach`, выведите каждый элемент массива в консоль.

// const numbers = [1,2,3,4,5,6,7,8]
// numbers.forEach(function(num) {
//     return console.log(num)
// })

// 2. Создайте массив из строк. Используя метод `forEach`, выведите каждую строку массива в консоль.

// const strings = ['eefe', 'wfwfw', 'zvzvf']
// strings.forEach(function(str) {
//     return console.log(str)
// })

// 3. Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". 
// Используя метод `forEach`, выведите в консоль имя и возраст каждого объекта в массиве.

// const monster = [
//         {
//             name: 'Ogr',
//             age: 152
//         },
//         {
//             name: 'Chupakabra',
//             age: 41
//         },
//         {
//             name: 'Slenderman',
//             age: 99
//         }
//     ]
// monster.forEach(function(msArr) {
//     return console.log(msArr)
// })

// 4. Создайте массив из чисел. Используя метод `forEach`, выведите в консоль сумму всех элементов массива.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function(elem) {
// 	sum += elem;
// });
// console.log(sum);

// 5. Создайте массив из строк. Используя метод `forEach`, выведите в консоль количество символов в каждой строке массива.

// const strings = ['eefe', 'wfwfw', 'zvz']
// strings.forEach(function(str) {
//     return console.log(str.length)
// })


// find()

// 1. Создайте массив из чисел. Используя метод `find`, найдите первый элемент массива, который больше 10.

// const numbers = [1,2,32,4,50,6]
// const trueNumbers = numbers.find(function(number) {
//     return number > 10
// })

// 2. Создайте массив из строк. Используя метод `find`, найдите первую строку массива, которая содержит букву "a".

// const strings = ['neffaf', 'eewgw', 'aelflaf']
// const newStr = strings.find(function(str) {
//     return str = Array.from(strings) == 'a'  // не сработало
// })

// 3. Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". 
// Используя метод `find`, найдите первый объект в массиве, у которого возраст больше 30.

// const technica = [
//             {
//                 name: 'Tank',
//                 age: 42
//             },
//             {
//                 name: 'BTR',
//                 age: 29
//             },
//             {
//                 name: 'Akula',
//                 age: 11
//             }
//         ]
// const objNumbers = numbers.find(function(number) {
//     return number.age > 30
// })

// 4. Создайте массив из чисел. Используя метод `find`, найдите первый элемент массива, который является четным.

// const numbers = [1,7,3,4,5,6]
// const evenNumbers = numbers.find(function(number) {
//     return number % 2 === 0
// })

// 5. Создайте массив из строк. Используя метод `find`, найдите первую строку массива, которая начинается с буквы "a".

// const strings = ['neffaf', 'eewgw', 'aelflaf']
// const newStr = strings.find(function(str) {
//     return str[0] == 'a'
// })
// console.log(newStr)