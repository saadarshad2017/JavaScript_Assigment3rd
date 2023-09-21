//!chapter 17-20

// question 1)
// var mularr=[[],[],[]]

//question 2 )
/*var mat=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
console.log(mat)*/

//question 3)
/*for(let i=1;i<=10;i++){
    document.write(i)
    document.write("<br>")
}*/

// question 4)
// var tableof=+prompt("Enter Number to Print table")
// var tablelen=+prompt("Enter length of table")
// document.write("Multiplication table of ", tableof)
// document.write("<br>");
// document.write("Length ",tablelen)
// document.write("<br>");
// for (let i=1;i<=tablelen;i++){
//     document.write(`${tableof} x ${i} = `,tableof*i)
//     document.write("<br>");
// }

// question 5)
/*var fruits = ["apple","banana","mango","orange","strawberry"]
for (var i=0;i<fruits.length;i++){
    document.write(fruits[i])
    document.write("<br>")
}
document.write("<br>");
for (var i=0;i<fruits.length;i++){
    document.write(`Element at index ${i} is ${fruits[i]}`)
    document.write("<br>");
}*/

//question  6)
/*document.write("Counting:")
document.write("<br>")
for (var i=1;i<=15;i++){
    document.write(`${i} , `)
}
document.write("<br>");
document.write("Reverse Counting:")
document.write("<br>");
for (var i = 10; i >= 1; i--) {
    document.write(`${i} , `);
}
document.write("<br>")
document.write("Even:")
document.write("<br>");
for(var i=0;i<=20;i++){
    if(i%2==0){
        document.write(`${i} , `);  
    }
}
document.write("<br>")
document.write("Odd:")
document.write("<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
    document.write(`${i} , `);
    }
}
document.write("<br>")
document.write("Series:")
document.write("<br>")
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
    document.write(`${i}K , `);
    }
}*/

// question 7)
/*var items=["cake","apple pie","cookie","chips","patties"]
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
var searchitem=search.toLowerCase()
var itempresent=false
for (var i=0;i<items.length;i++){
    if (searchitem==items[i]){
        itempresent=true
        document.write(`${search} is <b>available</b> at index ${i} in our bakery`)
        break
    }
}
if(itempresent==false){
    document.write(`We are sorry, ${search} is <b>not available</b> in our bakery`)
}*/

//question 8)
/*var a = [24, 53, 78, 91, 12];
document.write("Array Items ",a)
document.write("<br>")
let max = a[0]; 
for (let i = 1; i <a.length; i++) {
    if (a[i] > max) {
    max = a[i];
    }
}
document.write("The largest number is ",max)*/

//question 9)
/*var a = [24, 53, 78, 91, 12];
document.write("Array Items ", a);
document.write("<br>");
let min = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] < min) {
    min = a[i];
    }
}
document.write("The smallest number is ", min);*/

// question 10)
/*for(var i=1;i<=100;i++){
    if(i%5==0){
        document.write(`${i} , `)
    }
}*/


//! chapter 21-25

//question 1)
/*var fname=prompt("Enter first name")
var lname=prompt("Enter last name")
var fullname=fname+""+lname
alert("Welcome, "+ fullname)*/

//question 2)
/*var favpho=prompt("Enter your favourite phone")
document.write("My favourite phone is: ",favpho)
document.write("<br>")
document.write("Length of string ",favpho.length)*/

// question 3)
// var str="Pakistani"
// document.write("String: ",str)
// document.write("<br>")
// document.write("Index of 'n': ",str.indexOf("n"))

// question 4)
// var str="Hello World"
// document.write("String: ", str)
// document.write("<br>");
// document.write("Last index of 'l': ", str.lastIndexOf("l"))

// question 5)
/*var str = "Pakistani";
document.write("String: ", str);
document.write("<br>");
document.write("Character at index 3: ", str.charAt(3));*/

//question 6)
/*var fname = prompt("Enter first name");
var lname = prompt("Enter last name");
alert("Welcome, " + fname.concat(" ",lname));*/

// question 7)
/*var city="Hyderabad"
document.write("City: ",city)
document.write("<br>")
document.write("After replacement: ",city.replace("Hyder","Islam"))*/

//question 8)
/*var msg = "Ali and Sami are best friends. They play cricket and football together."
document.write("message: ", msg)
document.write("<br>")
document.write("After replacement: ", msg.replace(/and/g,"&"))*/

//question 9)
/*var str="472"
document.write("Value: ",str)
document.write("<br>")
document.write("Type: ",typeof(str))
document.write("<br>")
var num=parseInt(str)
document.write("Value: ", num);
document.write("<br>");
document.write("Type: ", typeof(num));*/

//question 10)
/*var uinp=prompt("Enter text")
document.write("User input: ",uinp)
document.write("<br>")
document.write("Upper case: ",uinp.toUpperCase())*/

//question 11)
/*var uinp = prompt("Enter text");
document.write("User input: ", uinp);
document.write("<br>");
document.write("Title case: ",uinp.charAt(0).toUpperCase() + uinp.slice(1));*/

//question 12)
/*var num=35.36
document.write("Number: ",num)
document.write("<br>")
var str=num.toString()
document.write("Result: ",str.replace(".",""))*/

//question 13)
/*var username=prompt("Enter username")
var isvalid=true
for (var i=0;i<=username.length;i++){
    ccode=username.charCodeAt(i)
    if(ccode === 33 || ccode === 44 || ccode === 46 || ccode === 64){
        isvalid=false
        alert("Please Enter a valid username")
    }
}
if(isvalid==true){
    alert("Your username is correct")
}*/

//question 14)
/*var items=["cake","apple pie","cookie","chips","patties"]
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
var searchitem=search.toLowerCase()
var itempresent=false
for (var i=0;i<items.length;i++){
    if (searchitem==items[i]){
        itempresent=true
        document.write(`${search} is <b>available</b> at index ${i} in our bakery`)
        break
    }
}
if(itempresent==false){
    document.write(`We are sorry, ${search} is <b>not available</b> in our bakery`)
}*/

//question 15)
/*var inppass=prompt("Enter Password")
var passw = /^[A-Za-z]\w{6,}$/;
if (inppass.match(passw)) {
    alert("Correct, try another...");
} else {
    alert("Wrong...!");
}*/

//question 16)
/*var university = "University of Karachi"
var university=university.split("")
for (var i = 0; i < university.length; i++){
    document.write(university[i])
    document.write("<br>")
}*/

//question 17)
/*var uinp=prompt("Enter text")
document.write("User input: ",uinp)
document.write("<br>")
document.write("Last character of input: ",uinp.charAt((uinp.length)-1))*/

//question 18)
/*var text="The quick brown fox jumps over the lazy dog"
document.write("Text: ",text)
document.write("<br>")
var lowtext = text.toLowerCase();
var word=lowtext.split(" ")
count=0
for (var i=0;i<word.length;i++){
    if(word[i]==="the"){
        count++
    }
}
document.write(`There are ${count} occurence of the word 'the'`)*/