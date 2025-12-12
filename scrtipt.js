function Game1() {

   let ansver = Math.floor(Math.random() * 100) + 1;




while (true) {
   let userAnsver = prompt("Введите любое число от 0 до 100!");
   userAnsver= Number(userAnsver);
   if (ansver === userAnsver) {alert("Поздравляем, ты большой молодец,это правильный ответ!!!" );
      break;
   } else if(ansver > userAnsver) { alert("Не угадал, твое число чуть-чуть меньше загаданого!");
      
   }
   else  {alert("Не угадал, твое число чуть-чуть больше загаданого!");}

   }

   
}
function Game2(){

const num1 = Math.floor(Math.random() * 10) + 1; 
const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
 let userAnsver;
 userAnsver = Number(userAnsver);
  let result;

switch (operator) {
    case '+':
      userAnsver = `${num1} + ${num2}`;
      result = num1 + num2;
      break;
    case '-':
      userAnsver = `${num1} - ${num2}`;
      result = num1 - num2;
      break;
    case '*':
      userAnsver = `${num1} * ${num2}`;
      result = num1 * num2;
      break;
    case '/':
   
      userAnsver = `${num1} / ${num2}`;
      result = num1 / num2;
      break;
  }

 const userNum = prompt(`Решите: ${userAnsver}`);
 const quest = parseFloat(userNum);
 if (quest == result) {
    alert("Верно!");
  } else {
    alert(`Неправильно. Правильный ответ: ${result}`);
  }}

   function Game3(){
   let splitWord = prompt("Пожалуйста,введите ваш текст").split('');
   let reverseWord = splitWord.reverse();
   let joinWord = reverseWord.join('');
    alert(joinWord);    
    return joinWord;
   }

  function Game5() {
      
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let num = 0; 


    for (let i = 0; i < quiz.length; i++) {
       
        let quizQuest = Number(prompt(`Выбери правильный ответ? \n${quiz[i].question} \n${quiz[i].options.join('\n')}`));
        
        
        if (quizQuest === quiz[i].correctAnswer) {
            num++; 
            alert("вы ответили верно");
        } else {
            alert("не верно");
        }
    }


    alert(`Вы ответили на ${num} вопросов`);
}




let str ='js';
str = str.toUpperCase();
console.log(str);


function filter (arr, str) {
   const lowerStr = str.toLowerCase();
   return arr.filter(item => item.toLowerCase().startsWith(lowerStr));

}

console.log(filter(['Молокозавод', 'Молочка','МИЛк'], 'Молоко'));



let num3 =  32.58884;
 console.log(Math.floor(num3));
 console.log(Math.ceil(num3));
 console.log(Math.round(num3));



 
 console.log(Math.min(52, 53, 49, 77, 21, 32));
 console.log(Math.max(52, 53, 49, 77, 21, 32));



 let num5 = (Math.random() * 10) + 1;
console.log(Math.floor(num5));



function randomNumFucn (num6){
   const arr = [];
   for(let i = 0; i < num6; i++){
       arr.push((Math.floor(Math.random()*num6)) / 2);
   }
return arr;
}

console.log(randomNumFucn(10));


function doubleRandom(num7,num72){
   return Math.floor(Math.random() * (num72 - num7 + 1)) + num7;
}

console.log(doubleRandom(12,25));



let currentDate = new Date();
console.log(currentDate);  


currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);



function formDate(date) {
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября",
      "Октября", "Ноября", "Декабря"];
const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth();
const dayOfWeek = days[date.getDay()];
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
  
   return `
    Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds};
  `; 
}

 console.log(formDate(new Date()));