let i = 0;
while (i < 2) {
  alert("Привет");
  i++;}


  let n1 = 1;
  while (n1 <= 5) {alert(n1);
  n1++;}


    let n2 = 7;
  while (n2 <= 22) {alert(n2);
  n2++;}


  let worker1 = {
   name: 'Kolya',
   salary: 200
  }

  let worker2 = {
   name: 'Vasya',
   salary: 300
  }

  let worker3 = {
   name: 'Petya',
   salary: 400
  }

  for (let key in worker1) {
     alert(`${key}: ${worker1[key]}`);
}

for (let key in worker2) {
     alert(`${key}: ${worker2[key]}`);
}

for (let key in worker3) {
     alert(`${key}: ${worker3[key]}`);
}
   

let n = 1000;
let atb = 0;
while (n >= 50) {
  n = n / 2;
  atb++;
}
 
alert("число делений: " + atb);
alert(n)


let F = 5; 

  for (let i = F; i <= 31; i += 7) {

     {

       alert (`Сегодня пятница. Необходимо подготовить отчет.`);

    }    

}


