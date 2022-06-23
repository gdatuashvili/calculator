


// var x = document.getElementById("display").innerText;
// console.log(x);
// var y = document.getElementById("value").value;
// console.log(y);
// var t = y == x;
// console.log(t);

// var x = 50;
// var y = 5;
// var t = document.getElementById("demo").innerText;
// var z = eval(t);
// console.log(z);

// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);
// alert(z);
// prompt(z);


// var firstName = "George", lastName = "Datuashvili", age = 33;
// console.log(firstName, lastName, age);

// alert(5*10);

// alert(82 % 9);

// var x = 10;
// var y = 15;
// var x = x + y;
// console.log(x);





// var x = document.getElementById("display");
// var x = document.getElementById("display").innerHTML;
// var y = document.getElementById("value").value;
// var x = x.innerText;
// console.log(x + y);

// var a = "re";
// var b = "zo";
// console.log(a + b);



// console.log(y);
// var c = y += "x.innerText";
// console.log(c);

// x = a;
// y = 5;
// console.log(x += y);

// var x = 10;
// x += 5;
// console.log(x);
// x -= 5;
// console.log(x);
// x += 5;
// console.log(x);
// x += 5;
// console.log(x);
// x += 5;
// console.log(x);
// x -= 5;
// console.log(x);
// x -= 5;
// console.log(x);
// x -= 5;
// console.log(x);
// x -= 5;
// console.log(x);
// x *= 5;
// console.log(x);
// x = 10;
// y = 5;
// var x = x*= y;
// console.log(x);

// let length = 16;
// let lastName = "Jhonson";
// const x = {
//     firstName: "John",
//     lastName: "Doe"
// };

// const y = {
//     length: 16
// }


// console.log(y);
// console.log(lastName);


// function myFunction() {
//     return "Hello!"
// }
// console.log(myFunction);


// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// alert(person.lastName);

// const person = {
//     name: "გიორგი", lastName: "დათუაშვილი", age: 33
// };
// alert("მე ვარ " + person.name + " " + person.lastName + "," + " " + "" + person.age + " წლის.");


// const person = {
//     name: "George", age: 33
// };
// alert(person.name + " is " + person.age);

// var x = "Hello world!";

// function myFunction() {
//     prompt("Your PC is health!")
// }

// myFunction();

// var x = 5;
// console.log(x);

// function myFunction() {
//     return "Hello";
// }

// const person = {
//     name: "გიორგი",
//     lastName: "დათუაშვილი",
//     age: 33
// }

// var x = prompt("მე ვარ " + person.name + " " + person.lastName  + "," + " " + person.age + "წლის.");

// var x = 5;
// console.log(x + 5);
// console.log(" ");

// let txt = "   ";
// let x = txt.length;
// alert(x);


// ეს არის კალკულატორი - დასაწყისი

var x = document.getElementById("display");

function calc(arg1) {
    x.innerHTML = eval(arg1);
}

function insert(arg2) {
    arg2 == "="? calc(x.innerHTML) : x.innerHTML += arg2;
    console.log(arg2);
}

function clean(){
    x.innerHTML = " ";
}


