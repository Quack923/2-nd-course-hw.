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
	if (a > b) {
		return a;
} else  {
	return b;} 
	
}


function evenNumber() {
   let  n = prompt("Введите любое число");

if (n % 2 == 0) { alert("Ваше число четное")

   
} else { alert("Ваше число нечетное")
   
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

   if (userAge < 0) {alert("Вы ввели что-то не то");
      
   } else if (userAge > 0 ) {alert("Привет, друг!");
      
      
   } else {alert("Добро пожаловать!")}
   
}



function nanNumber(n1, n2) {

   if (isNaN(n1) || isNaN(n2)) {
    return 'Одно или оба значения не являются числом';
  }
  else (n1*n2)
   
  console.log(nanNumber(3, 5));
}



const circle1 = {
    radius: l,
    getArea() {
        return s = π * (l ** 2);
    },
    getPerimeter() {
        return C = 2 * π * l;
    }
}


const circle2 = {
    radius: 5,
    getArea() {
        return s = π * (5 ** 2);
    },
    getPerimeter() {
        return C = 2 * π * 5;
    }
}