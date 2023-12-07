// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 =  'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
 str1 = 'hello world';
 str2 = 'lorem ipsum';
 str3 =  'javascript is cool';
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
 str1 = 'HELLO WORLD';
 str2 = 'LOREM IPSUM';
 str3 = 'JAVASCRIPT IS COOL';

 console.log(str1.toLowerCase());
 console.log(str2.toLowerCase());
 console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
  str = 'Ревуть воли як ясла повні';
//['Ревуть', 'воли', 'як', 'ясла', 'повні']
let  stringToarray = (str) => str.split(" ");
let arr = stringToarray(str);
console.log(arr)
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numMap = [10,8,-7,55,987,-1011,0,1050,0];
console.log(numMap.map(String))
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
let sortNums = (nums, derection) =>{
 if (derection === 'asc'){
  nums.sort(function(a, b) {
   return a - b;
  });
 }else if (derection === 'desc'){
  nums.sort(function(a, b) {
   return b - a;
  });
 }else {
  nums.sort(function(a, b) {
   return a - b;
  });
 }
 return nums
}
let sortedDescending = sortNums(nums, 'desc');
console.log(sortedDescending);
let sortedAscending = sortNums(nums,'asc');
console.log(sortedAscending);
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
// -- відсортувати його за спаданням за monthDuration
let descending = coursesAndDurationArray.sort((x1, x2) =>{
  return x1.monthDuration - x2.monthDuration
})
console.log(descending)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filterMonth = coursesAndDurationArray.filter((x) => {
  return x.monthDuration > 5;
})
console.log(filterMonth)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
function uuidv4() {
 return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
     (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
 );
}
let coursesAndDurationArrayMap = coursesAndDurationArray.map((x)=> x.id = (uuidv4()))
console.log(coursesAndDurationArray)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let deck = [];
let suits = ['spade','diamond', 'heart', 'clubs'];
let value = [ 6,7,8,9,10,'ace','jack','queen','king'];
suits.forEach((suit) => {
 value.forEach((value) => {
      const color = suit === 'spade' || suit === 'clubs' ? 'black' : 'red';
      const card = {
       suit: suit,
       value: value,
       color: color
      }
      deck.push(card)
 })
})
console.log(deck)
// - знайти піковий туз
let spaceAce = deck.find((card) => card.suit === 'spade' && card.value === 'ace');
console.log(spaceAce);
// - всі шістки
let six = deck.filter((card) => card.value === 6);
console.log(six);
// - всі червоні карти
let redCard = deck.filter((card) => card.color === 'red');
console.log(redCard);
// - всі буби
let diamondCard = deck.filter((card) => card.suit === 'diamond');
console.log(diamondCard);
// - всі трефи від 9 та більше
let allClubs = deck.filter((card) => card.suit === 'clubs' &&  (typeof card.value === 'string' || card.value > 9));
console.log(allClubs);
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardsBySuit = deck.reduce((result, card) => {
 result[card.suit].push(card);
 return result;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log('Карти по "мастях":', cardsBySuit);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
 {
  title: 'JavaScript Complex',
  monthDuration: 5,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
 },
 {
  title: 'Java Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'git',
   'java core',
   'java advanced']
 },
 {
  title: 'Python Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'python core',
   'python advanced']
 },
 {
  title: 'QA Complex',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
 },
 {
  title: 'FullStack',
  monthDuration: 7,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'react',
   'angular',
   'aws',
   'docker',
   'git',
   'node.js',
   'python',
   'java']
 },
 {
  title: 'Frontend',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
 }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let sassModules = coursesArray.filter((x) =>{
 for (const x1 of x.modules) {
  if (x1 === 'sass'){
   return x1
  }
 }
});
console.log(sassModules);
// --написати пошук всіх об'єктів, в який в modules є docker
let dockerModules = coursesArray.filter((x) =>{
 for (const x1 of x.modules) {
  if (x1 === 'docker'){
   return x1
  }
 }
});
console.log(dockerModules);