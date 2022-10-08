/*if(true) {
    console.log("true");
}
if(false) {
    console.log("false");
}*/

/*const name = "Alex";
if(name==="Alex") {
    console.log(`Привет ${name}`);
} else {
console.log(`Привет Незнакомец`);
}*/
/*const name = "Alex3";
if (name === "Ivan") {
  console.log(`Привет ${name}`);
} else if (name === "Alex") {
  console.log(`Привет друг ${name}`);
} else if (name === "Petr") {
  console.log(`Hi ${name}`);
} else {
  console.log("Привет Незнакомец");
}*/
/*const name = "Alex3";

if (name === "Ivan") {
  console.log(`Привет ${name}`);
} else if (name) {
  console.log(`Привет друг ${name}`);
} else if (name === "Petr") {
  console.log(`Hi ${name}`);
} else {
  console.log("Привет Незнакомец");
}*/
/*const userName = "Alex"
const result = userName === "Alex1" ? "Hello Alex" : "Hello User";
console.log (result);*/
/*const a = 1;
	const b = 20;
	const c = 3;
	if (a < b) { //лучше делать < , а не >, чтобы сразу исключить а, так как если оно меньше чего-то то а нас не интересует
    if (b < c) {
      console.log("C самый большой");
    } else {
      console.log("B самый большой");
    }
  } else {
    if (a < c) {
      console.log("C самый большой");
    } else {
      console.log("A самый большой");
    }
  }*/
/*const userRole = "manager";
switch (userRole) {
  case "admin":
    console.log("Это админ, и он любит чай");
    break;

  case "user":
    console.log("Это юзер, и он любит колу");
    break;

  case "manager":
    console.log("Это manager, и он любит кофе");
    break;
}
/*let result3 = false || "" || 0;
console.log(result3);*/
/*const a = 100;
const b = 20;
const c = 3;

if (a < b && b < c) {
  console.log("C самый большой");
} else if (a < b && b > c) {
  console.log("B самый большой");
} else if (a < c) {
  console.log("C самый большой");
} else {
  console.log("A самый большой");
}*/
/*let a = 30; //a - temperature
if (a <= -30) {
  console.log("Оставайтесь дома");
} else if (a > -30 && a <= -10) {
   console.log("Сегодня холодно");
} else if (a > -10 && a <= 5) {
    console.log("Не холодно");
} else if (a > 5 && a <= 15) {
    console.log("Тепло");
} else if (a > 15 && a <= 25) {
    console.log("Очень тепло");
} else if (a > 25 && a < 35) {
    console.log("Жарко");
} else if (a >= 35) {
    console.log("Пекло!");
}*/
/*let i = 0;
while (i < 100) {
  i = i + 1;
  console.log(i);
}*/
/*let i = 0;
while (true) {
  if (i < 30) {
    i ++;
  } else {
    break;
  }
   console.log(i);
  }*/
/*for (let i = 0; i <= 4; i += 1) {
  if (i === 1 || i === 2) continue;
  console.log(i);
}*/
/*const arr = [1, 3, 5, 6, 9, 12, 14, 16, 17, 18, 21, 25, 65, 37];

const result = [];

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 === 0) {
    result.push(arr[i]);
  }
}
console.log(result);*/
const text = "My text";
const count = 56;
let i = 0;
while (i < count) {
  console.log(text);
  i += 1;
}

