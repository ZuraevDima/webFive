___
# МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕСИОНАЛЬНОГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
### ***<center>Лабораторная работа №5. «Основы языка JavaScript».</center>*** <br><p align="right">Подготовил студент направления подготовки 01.03.02 «Прикладная математика и информатика»<br> Института естественных наук и техносферной безопасности<br> Зураев Дмитрий Бакенович.</p><br><p align="right">Научный руководитель:<br> Соболев Евгений Игоревич</p><br> <center>Южно-Сахалинск 2023 г.</center>
___
### <center>Введение</center>
<p align="justify">JavaScript (JS) - это высокоуровневый язык программирования, который используется для создания интерактивных и динамических веб-страниц. JS является одним из трех основных языков, используемых веб-браузерами (наряду с HTML и CSS), и позволяет добавлять функциональность и взаимодействие на веб-страницах.
Лабораторная работа по JavaScript (JS) предоставляет возможность познакомиться с одним из самых популярных языков программирования, используемых для разработки веб-приложений.</p>

### <center>Цели</center>
<p align="justify"></p>

### <center>Задачи</center>
<p align="justify">Применить технологию JS.</p>

____________________
## <center>_Решение_</center>
1.	Напишите код, выполнив задание из каждого пункта отдельной строкой:
-	Создайте пустой объект user.
-	Добавьте свойство name со значением John.
-	Добавьте свойство surname со значением Smith.
-	Измените значение свойства name на Pete.
-	Удалите свойство name из объекта.
```javascript
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Peter";
delete user.name;
alert(user.surname);
```
2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. Должно работать так:
```js
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
```

```javascript
function isEmpty(obj) { 
    for (let key in obj) { 
        return false; 
    } 

    return true; 
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
```
3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
```javascript
const user2 = {
    name: "John"
};
alert(user2.name); //пишет John
user2.name = "Pete"; 
alert(user2.name); // пишет Pete
```
4. У нас есть объект, в котором хранятся зарплаты нашей команды:
```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

```javascript
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}              

let sum = 0;
for (let key in salaries) {
sum += salaries[key];  
}
alert(sum);
```
5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Например:
```js
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
```
```js
multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
```javascript
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number')
            obj[key] *= 2;
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
for(let key in menu){
    alert(menu[key]);
}
```
6. Что выведет следующий код?

`let fruits = ["Яблоки", "Груша", "Апельсин"];`

```js
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
```
```javascript
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");
// fruits - ["Яблоки", "Груша", "Апельсин", "Банан"];
alert(fruits.length); // 4   
```
7. Давайте произведём 5 операций с массивом.
·	Создайте массив styles с элементами «Джаз» и «Блюз».
·	Добавьте «Рок-н-ролл» в конец.
·	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
·	Удалите первый элемент массива и покажите его.
·	Вставьте «Рэп» и «Регги» в начало массива.
·	Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
```javascript
let styles = ['Джаз', 'Блюз'];
alert(styles);
styles.push('Рок-н-ролл');
alert(styles);
styles[Math.floor(styles.length / 2)] = 'Классика';
alert(styles);
styles.shift();
alert(styles);
styles.unshift('Рэп', 'Регги');
alert(styles);  
```
8. Каков результат? Почему?
```js
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ?
```
```javascript
let arr = ["a", "b"];
arr.push(function() {
    alert( this );
})
alert(arr[2]()); // undefined
```
9. Напишите функцию sumInput(), которая:
·	Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
·	Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
·	Подсчитывает и возвращает сумму элементов массива.

```javascript
let array = [];

while(true)
{
    var input = prompt("Введите число");
    if (input == null || input == isNaN(input))
        break;
    else
        array.push(parseInt(input));
}

let sum = 0;
for (let i = 0; i < array.length; i++)
    sum += array[i];

alert('Сумма элементов массива = ' + sum);
```
10. На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Например:
```js
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
```
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

```js
var arr = [1, 2, 3];
    /*[-1, 2, 3, -9] = 5 
    [2, -1, 2, 3, -9] = 6  
    [-1, 2, 3, -9, 11] = 11      
    [-2, -1, 1, 2] = 3      
    [100, -9, 2, -3, 5] = 100
    [1, 2, 3] = 6 (берём все)*/
alert("Исходный массив: " + arr);
function getMaxSubSum(arr) {
    let newSum = 0, maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        newSum += arr[i];
        if (arr[i] > newSum) 
            newSum = arr[i];
        if (newSum > maxSum) 
            maxSum = newSum;
    }
    return maxSum;
}
alert(getMaxSubSum(arr));
```
11. Удалить в массиве все числа, которые повторяются более двух раз. 
```js
let arr = [1,2,3,4,2,5,6,2,7,8,2,3,1,1,8];
const counts = {};
for (let i = 0; i < arr.length; i++){
counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1; 
//если элемент уже был встречен, то увеличиваем значение, иначе устанавливаем значение 1
}

for (let key in counts) {
if (counts[key] > 2){
    arr = arr.filter(num => num !== parseInt(key));
}
}
alert(arr);
```
12.Введите одномерный целочисленный массив. Найдите наибольший нечетный элемент.
Далее трижды осуществите циклический сдвиг влево элементов, стоящих справа от найденного максимума,
и один раз сдвиг элементов вправо, стоящих слева от найденного максимума.
```javascript
function Foo(){
    let largestOdd = arr[0];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0 && arr[i] > largestOdd)
            largestOdd = arr[i];
            index = i;
    }

    for (let i = 0; i < 3; i++) {
        if (index === arr.length - 1) 
            break;
        let temp = arr[index + 1];
        arr.splice(index + 1, 1);
        arr.splice(index, 0, temp);
        index++;
    }

    let temp = arr[index - 1];
    arr.splice(index - 1, 1);
    arr.splice(index, 0, temp);
}

let arr = [1, 2, 3, 65, 72, 81, 12, 10];
alert("Исходный массив: " + arr);
Foo(arr);
alert("Новый массив: " + arr); 
```
13. Найдите сумму отрицательных элементов массива.
```javascript
    const arr = [1, -2, 3, -4, 5, -6, 7, -8, 9]; 
    let neg_sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < 0) { 
            neg_sum += arr[i]; 
        } 
    }
    alert('Сумма отрицательных элементов массива: ' + neg_sum); 
```
14. Найдите произведение элементов массива с нечетными номерами.
```javascript
    const arr = [1, 2, 3, 4, 5, 6, 7];
    let res = 1;
    for (let i = 1; i < arr.length; i += 2)
    {
        res *= arr[i];
    }
    alert('Произведение элементов массива с нечетными номерами: ' + res); //2*4*6 = 6*8=48
```
15. Найдите сумму элементов массива между двумя первыми нулями. Если двух нулей нет в массиве, то выведите ноль.
```javascript
    const massive = [1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9];
    let onezero = -1;
    let twozero = -1;
    let sum = 0;
    for (let i = 0; i < massive.length; i++) {
    if (massive[i] === 0) {
    if (onezero === -1) {
        onezero = i;
    } else if (twozero === -1) {
        twozero = i;
        break;
    }
    } else if (onezero !== -1 && twozero === -1) {
        sum += massive[i];
    }
    }
    if (onezero !== -1 && twozero !== -1) {
        alert('Сумма элементов между двумя первыми нулями: ' + sum);
    } else {
        alert('Двух нулей в массиве не найдено, сумма равна 0.');
    }
```
16. Найдите наибольший элемент массива.
```javascript
    const massive = [10, 5, 20, 8, 15, 30, 25, 12, 52, -52];
    let biggestEl = massive[0];
    for (let i = 1; i < massive.length; i++) {
        if (massive[i] > biggestEl) {
            biggestEl = massive[i];
        }
    }
    alert('Наибольший элемент в массиве: ' + biggestEl);
```
17. Найдите наименьший чётный элемент массива. Если такого нет, то выведите первый элемент. 
```javascript
    const arr = [11, 7, 15, 2, 9, 6, 8, 10, 4];
    let lowest_chet = Infinity;
    let firstEl = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] < lowest_chet) {
            lowest_chet = arr[i];
        }
    }
    if (lowest_chet === Infinity) {
        lowest_chet = firstEl;
    }
    alert('Наименьший чётный элемент массива: ' + lowest_chet);
```
18. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.
```javascript
    const arr = [3, 0, 1, 0, 2, 0, 4, 5, 0, 6];
    function sortzero(arr) {
        return arr.sort((a, b) => {
            if (a === 0 && b !== 0) return -1;
            if (b === 0 && a !== 0) return 1;
            return 0;
        });
    }
    const sortmass = sortzero(arr);
    alert('Сначала нулевые, потом все остальные: ' + sortmass);
```
19. Найдите сумму номеров минимального и максимального элементов. 
```javascript
            const arr = [10, 5, 20, 8, 15, 30, 25, 12];
            let minEl = arr[0];
            let maxEl = arr[0];
            let indMin = 0;
            let indMax = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < minEl) {
                    minEl = arr[i];
                    indMin = i;
                }
                if (arr[i] > maxEl) {
                    maxEl = arr[i];
                    indMax = i;
                }
            }
            const sumIndex = indMin + indMax;
            alert('Сумма номеров минимального и максимального элементов: ' + sumIndex);
```
20. Найдите минимальный по модулю элемент массива.
```javascript
            const arr = [10, -5, 3, -7, 2, -9]; 
            const minAbsValue = Math.min(...arr.map(Math.abs)); 
            alert('Минимальный по модулю элемент массива ' + minAbsValue);
```
21. Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать 
реверс отдельно для 1-ой и 2-ой половин массива.
```javascript
var arr = [];
            for (var i = 0; i < 10; i++) {
                arr.push(Math.floor(Math.random() * 21) - 10);
            }
            alert("Исходный массив: " + arr);
            var firstHalf = arr.slice(0, Math.floor(arr.length / 2));
            firstHalf.reverse();
            // Реверс для 2-ой половины массива
            var secondHalf = arr.slice(Math.floor(arr.length / 2));
            secondHalf.reverse();
            // Объединяем оба реверсированных массива
            var reversedArray = firstHalf.concat(secondHalf);
            alert("Массив после реверса 1-й и 2-й половины: " + reversedArray);    
```
22. Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить
циклический сдвиг ВПРАВО на 4 элемента.	
```js
var arr = [];
            for (var i = 0; i < 12; i++) {
                arr.push(Math.floor(Math.random() * 25) - 12);
            }
            alert("Исходный массив: " + arr);
            for (var i = 0; i < 4; i++) {
                arr.unshift(arr.pop());
            }
            alert("Массив после сдвига на 4 элемента вправо: " + arr);
```

<center><b>Задачи CodeWars:</b></center>

[1 Kata](https://www.codewars.com/kata/javascript-mathematician)
```javascript
function calculate(...firstArgs) {
  return (...secondArgs) => {
    const sumFirst = firstArgs.reduce((acc, num) => acc + num, 0); // Сумма первого набора аргументов
    const sumSecond = secondArgs.reduce((acc, num) => acc + num, 0); // Сумма второго набора аргументов
    return sumFirst + sumSecond;
  };
}
```
[2 Kata](https://www.codewars.com/kata/javascript-from-the-inside-number-1-map)
```javascript
Array.prototype.map = function(callback, context) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  
  const array = this;
  
  const result = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      result[i] = callback.call(context, array[i], i, array);
    }
  }
  
  return result;
};
```
[3 Kata](https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter)
```javascript
Array.prototype.filter = function(func, thisArg){
  if(this === '' || this === [] || this === undefined) return []
  let result = []
  let lengths = this.length
  for(let i = 0; i < lengths ; i++){
    if(this[i]){
      let res = ''
    if(thisArg  != undefined) {
      res = func.call(thisArg, this[i], i, this)
    } else {
        res = func(this[i], i, this)
    }
    if(res){
       if(i in this)
        result.push(this[i])
    }
    } else {
      if(i in this)
        result.push(this[i])
    }
  }
  return result
}
```
[4 Kata](https://www.codewars.com/kata/power-bind)
```javascript
Function.prototype.bind = function (ctx) {

  var originalFn = this;
  
  var func = function() {
      return originalFn.apply(ctx, arguments);
  };
  
  func.bind = function(newCtx) {
      return Function.prototype.bind.call(originalFn, newCtx);
  };
  
  return func;
};
```
[5 Kata](https://www.codewars.com/kata/closures-and-scopes)
```javascript
function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}
```
[6 Kata](https://www.codewars.com/kata/can-you-keep-a-secret)
```javascript
function createSecretHolder(secret) {
	return {
		getSecret() {
			return secret
		},

		setSecret(key) {
			secret = key
		}
	}
}
```
## <center>_Вывод_</center>
Таким образом, мне удалось поработать с js, писал много функций, закрепил работу с массивами
