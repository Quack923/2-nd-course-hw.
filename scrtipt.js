let password = (12345);
let UserPassword = (prompt ('Введите пароль:'));

if (UserPassword==password){alert("Пароль введен верно");}
    
 else {alert("Пароль введен неверно");}
    
let c =(7);
if (c>0&&c<10) { console.log("Верно");
    
} else {console.log("Неверно");
    
}


let d =(70);
let e = (120);

if (d>100||e>100) {console.log("Верно");
    
} else {console.log("Неверно");
    
}

let a = '2';
let b = '3';
 alert(Number(a) + Number(b));


let month = prompt("Введите номер или название месяца и узнайте какой это сезон");

switch (month) {
   case 'январь'||'первый':
      console.log('Зима');
      break;
   case 'февраль'||'Второй':
      console.log('Зима');
      break;
   case 'март'||'Третий':
      console.log('Весна');
      break;
   case 'апрель'||'Четвертый':
      console.log('Весна');
      break;
   case 'май'||'Пятый':
      console.log('Весна');
      break;
   case 'июнь'||'Шестой':
      console.log('Лето');
      break;
   case 'июль'||'Седьмой':
      console.log('Лето');
      break;
   case 'август'||'Восьмой':
      console.log('Лето');
      break;
   case 'сентябрь'||'Девятый':
      console.log('Осень');
      break;
   case 'октябрь'||'Десятый':
      console.log('Осень');
      break;
   case 'ноябрь'||'Одинадцатый':
      console.log('Осень');
      break;
   case 'декабрь'||'Двенадцатый':
      console.log('Зима');
      break;
   
   default:
      console.log('ввели что-то не то');
      break;
}
