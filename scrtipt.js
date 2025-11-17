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

function smallNumber(a, b) {
	if (a < b) {
		return a;
} else  {
	return b;} 
	
}


function evenNumber(n) {

   n = Number(n);

if (n % 2 == 0) { return 'Ваше число четное';

   
} else { return 'Ваше число нечетное';
   
}
   
}


function square(x) {
  const square = x * x;
  console.log(square);
}

function retSquare(x) {
  return x * x;
}





function ageControl() {

   let userAge = prompt("Введите ваш возраст");

   userAge = Number(userAge);

   if (userAge < 0) {alert("Вы ввели что-то не то");
      
   } else if ( 12 > userAge > 0 ) {alert("Привет, друг!");
      
      
   } else {alert("Добро пожаловать!")}
   
}



function nanNumber(n1, n2) {

   if (isNaN(n1) || isNaN(n2)) {
    return 'Одно или оба значения не являются числом';
  }
  else {
    return n1 * n2;
  }
   
}



function numberOrnot (){

   let userNumber = prompt('Ввведите значение');
      let num3 = (userNumber*userNumber*userNumber);
   if (isNaN(userNumber)) {
      return 'Переданный параметр не является числом';
   } else { return  `n в кубе равняется ${num3}`;
      
   }

}

let radius1 = 5;
const circle1 = {
    getArea() {
        return Math.PI * (radius1 ** 2);
    },
    getPerimeter() {
        return C = 2 * π * l;
    }
}

let radius2 = 5;
const circle2 = {
    getArea() {
        return Math.PI * (radius2 ** 2);
    },
    getPerimeter() {
        return C = 2 * π * 5;
    }
}