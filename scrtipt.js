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


function Game4(){

 let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага").toLowerCase();

 const options = ["камень", "ножницы", "бумага"];

 
const randomIndex = Math.floor(Math.random() * options.length);
const botChoice = options[randomIndex];

let result = "";


if (userChoice === botChoice) { result ="У вас ничья!";
  
} else if (
        (userChoice === "камень" && botChoice === "ножницы") ||
        (userChoice === "ножницы" && botChoice === "бумага") ||
        (userChoice === "бумага" && botChoice === "камень")
)
  {
        result = "Вы выиграли, поздравляем!";
    } else {
        result = "К сожалению, вы проиграли!";
    }

  alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${botChoice}\n\nРезультат: ${result}`);

}



const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));


function filter(array, ruleFunction) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender == 'male';
}

console.log(filter([-5, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));



function curDateThirtysec(){

  let count = 0;
const intervalId = setInterval(() => {
  console.log(new Date().toLocaleString()); 
  count += 3;

  if (count >= 30) {
    clearInterval(intervalId);
    console.log("Время истекло");
  }
}, 3000);
};

console.log (curDateThirtysec());



function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})




function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))