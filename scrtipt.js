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

const actions = ['+', '-', '*', '/'];

let num1 =  Math.floor(Math.random()*10)+1;
let num2 =  Math.floor(Math.random()*10)+1;


switch (actions) {
   case '+' :
      userAnsver = prompt(`сложите ${num1} и ${num2}`);
      result = num1 + num2;

      break;

     case '-':
         userAnsver = prompt(`Вычтите ${num1} из ${num2}`);
         result = num1 - num2;

      break;

   case '*':
        userAnsver = prompt(`Умножьте ${num1} на ${num2}`);
      result = num1 * num2;

   break;

   case '/':
      userAnsver = prompt(`Разделите ${num1} на ${num2}(В случае получения длинной дроби укажите до 2 чисел после запятой)`);
      result = num1 / num2;
      result = result.toFixed(2)
      break;
}
userAnsver = Number(userAnsver);

if (userAnsver === result)
    {alert('Вы большой молодец это правильный ответ');
   
} else { 
   alert(`Ой, кажется вы где-то ошиблись, правильный ответ ${result}`);
   
}
}


const arr =[1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break;
  }
}


  const arr2 =[1, 5, 4, 10, 0, 3] 
for (let i = 0; i < arr2.length; i++) {
   if (arr2[i] === 4) {
      console.log(i);
      break;
   }
}

const arr3 = [1, 3, 5, 10, 20]
console.log(arr3.join(' '));




const massive1 = [];
for (let b = 0; b < 3; b++){
   const massive2 = [];
   for (let b = 0; b < 3; b++){
      massive2.push(1);
   }
   massive1.push(massive2);
   }
console.log(massive1);



const mas1 = [1, 1, 1];
mas1.push(2, 2, 2);

console.log(mas1);

const mas2 = [9, 8, 7, 'a', 6, 5];

mas2.sort(Number);
const filMas = mas2.filter(item => !isNaN(item));


console.log(filMas);


const questMas = [9, 8, 7, 6, 5];
let ansverNum = prompt('Попробуйте угаадть есть ли ваше число в массиве');
if (questMas.includes(ansverNum)) { alert('Поздравляем, вы угадали');
   
} else { alert('К сожалению, вы не угадали');
   
}


let str = 'abcdef';
str = str.split('');
str.reverse();
str = str.join('');
console.log(str);




const ms9 = [[1, 2, 3],[4, 5, 6]];
const ms91 = [];
for ( let i = 0; i < ms9.length; i++) {
   ms91.push(...ms9[i]);
}
console.log(ms91);


const mas10 = [1,3,5,7,9];

for ( let i = 0; i < mas10.length; i++){
   if(mas10[i+1]){
console.log(mas10[i]+mas10[i+1]);}
}



function double(mas) {
   return mas.map(item => item ** 2);

}

console.log(double([2,5,4]));



function run (mas){
   return mas.map(item => item.length);

}

console.log(run(['length'])); 


function minus (ms13) {
   return ms13.filter(item => item < 0);

}

console.log(minus([1,4,5,6,7]));


function random(){
return Math.floor(Math.random()*10);
}

const ms14 = [];
for (let i = 0; i < 10; i++){
   ms14.push(random());
}
const ms142 = [];
for( let i = 0; i < ms14.length; i++){
   if(ms14[i] % 2 === 0) {
      ms142.push(ms14[i]);

   }
}

console.log(ms142);


function average(){
return Math.floor(Math.random()*10);
}
const ms15 = [];
for (let i = 0; i < 6; i++){
   ms14.push(random());
}

console.log(ms15.reduce((a,b)=> a + b / ms15.length));