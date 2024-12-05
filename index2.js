//1 
// let number = 0
// if(number == 0) {
//     console.log("equal to 0")
// }
// else if (number>0){
//     console.log("positive")
// }
// else {
//     console.log("negative")
// }

//2

// let cels = 1
// if(0 >cels) {
//     console.log("freezing")
// }
// else if (cels >=0 && 30>= cels) {
//     console.log("normal")
// }
// else{
//     console.log("hot")
// }

//3
// let char = 'a'
// if(char == 'a' || char == 'e' || char == 'u' || char == 'i' || char=='o' || char == 'y') {
//     console.log("it's a vowel")
// }
// else{
//     console.log("it's a consonant")
// }

//4
//already did 

//5
// let age = 14
// if(age>=0 && 13 >= age) {
//     console.log("Child")
// }
// else if (19>= age && age>13){
//     console.log("Teenager")
// }
// else if (age>=20) {
//     console.log("adult")
// }
// else {
//     console.log("invalid input")
// }

//6
// let number = 35
// if (number % 5 === 0 || number % 7 === 0) {
//     console.log(number + "divisible by both 5 and 7")
// } else {
//     console.log(number + "not divisible by both 5 and 7")
// }

//7
// let hour =1
// if(hour>=0 && 11 >= hour){
//     console.log("morning")
// }
// else if (hour>=12 && 17 >= hour){
//     console.log("afternoon")
// }
// else if (hour>=18 && 23 >= hour){
//     console.log("evening ")
// }
// else {
//     console.log("invalid input")
// }

//8
// let number = 1234

// if (number >= 0 && number <= 9) {
//     console.log("it is a single digit number")
// } else if (number >= 10 && number <= 99) {
//     console.log("it is a double digit number")
// } else if (number >= 100 && number <= 999) {
//     console.log("it is a triple digit number")
// } else {
//     console.log("it is not a single, double, or triple digit number. or negative number")
// }

//9
// let number = 1
// if(number%4 ==0) {
//     console.log(number + " is a multiple of 4")
// }
// else {
//     console.log(number + " is not a multiple of 4")
// }

//10
// let char = "s"
// if(char.toUpperCase() === char) {
//     console.log("Uppercase")
// }
// else {
//     console.log("lowercase")
// }

//11
// let day = 1
// if(day>=1 && 5>=day) {
//     console.log("week day")
// }
// else if (day ==6 || day ==7){
//     console.log("weekend")
// }
// else{
//     console.log("invalid")
// }

//12
// let size = 'medium'

// if (size === 'small') {
//     console.log('coffee is $2');
// } else if (size === 'medium') {
//     console.log('coffee is $3');
// } else if (size === 'large') {
//     console.log('coffee is $4');
// } else {
//     console.log('invalid');
// }

//13
// let weather= 'rainy'
// if(weather == 'rainy') {
//     console.log("Don't forget umbrella")
// }
// else if(weather =='cold'){
//     console.log("don't forget your jacket")
// }
// else if (weather == 'sunny'){
//     console.log("don't forget your sunglasses")
// }
// else{console.log("invalid")
// }

//14
// let age = 10
// if(5>=age){
//     console.log("Free")
// }
// else if(age>=5 && 18>= age) {
//     console.log("10$")
// } else if(age>=19&& 60>=age) {
//     console.log("15$")
// } else if(age>=60){
//     console.log("12$")
// }

//15
// let energy = 100
// if(energy>=70) {
//     console.log("Happy")
// } else if(energy>=30){
//     console.log("Hungry")
// }
// else {
//     console.log("Sleepy")
// }

//16
// let weight = 60
// if(50>=weight){
//     console.log("Beginner")
// } else if(weight<=100) {
//     console.log("Intermediate")
// }
// else {
//     console.log("Advanced")
// }

//17
// let total = 301
// if(50>=total) {
//     console.log("No discount")
// } else if(total>50 && 100>=total) {
//     total=total*0.9
//     console.log("10% discount and total is " + total)
// } else if(total>100 && 200>=total) {
//     total=total*0.8
//     console.log("20% discount and total is " + total)
// } else {
//     total=total*0.7
//     console.log("30% discount and total is " + total)
// }

//18
// let pass = "asdada123"

// const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
// const numbers = /[1234567890]+/;

// console.log(specialCharacters.test(pass))
// console.log(numbers.test(pass))

// let hasnumber = false
// let haschar = false
// for (let i = 0; i < pass.length; i++) {
//     let char = pass[i]

//     if (char >= 0 && 9 >= char) {
//         hasnumber = true
//     }
//     if (char < 'z') {
//         haschar = true
//     }
// }
// if (pass.length >= 8 && haschar && hasnumber) {
//     console.log("Strong")
// } else if (pass.length >= 6 && (haschar || hasnumber)) {
//     console.log("Medium")
// }
// else if (pass.length < 6) {
//     console.log("Weak")
// }

//19
// let age = 1
// let height = 110
// if(age>=60) {
//     console.log("ticket is 7$")
// } else if(age>=18) {
//     if(height>=120) {
//         console.log("ticket is 10$")
//     }
//     else{
//         console.log("We dont serve Elves")

//     }
// } else {
//     console.log("ticket is 5$")

// }

//20
// let dataUsage = 30

// if (dataUsage <= 5) {
//   console.log("The cost is $10");
// } else if (dataUsage <= 20) {
//   console.log("The cost is $20");
// } else if (dataUsage <= 50) {
//   console.log("The cost is $30");
// } else {
//   console.log("The cost is $50");
// }

//21
// Sample Input
// let age = 30;
// let income = 30000;
// let creditScore = 650;

// if (age >= 21 && income >= 25000 && creditScore >= 600) {
//   console.log("You are eligible for the loan");
// } else {
//   console.log("You are not eligible for the loan");
// }

//22
// let attendance = 74; 
// let score = 74;  

// if (attendance < 75) {
//   console.log("Grade: F (Attendance below 75%)");
// } else {
//   if (score >= 90) {
//     console.log("Grade: A");
//   } else if (score >= 80) {
//     console.log("Grade: B");
//   } else if (score >= 70) {
//     console.log("Grade: C");
//   } else if (score >= 60) {
//     console.log("Grade: D");
//   } else {
//     console.log("Grade: F");
//   }
// }

//23
// let base = 2000
// let years = 6
// let target = true
// let attendance= 90
// if(years >=5) {
//     base=base+500
// }
// if(target){
//     base= base+300
// }
// if(attendance>=90) {
//     base= base+100
// }
// console.log(base);

//24
let gender = 'Female'
const time = '2:45:00'

const [hours, minutes, seconds] = time.split(':').map(Number);
const totalMinutes = hours * 60 + minutes + seconds / 60;

let performanceLevel;

if (gender === 'Male') {
  if (totalMinutes < 130) {
    performanceLevel = 'Elite';
  } else if (totalMinutes < 180) {
    performanceLevel = 'Advanced';
  } else {
    performanceLevel = 'Amateur';
  }
} else if (gender === 'Female') {
  if (totalMinutes < 150) {
    performanceLevel = 'Elite';
  } else if (totalMinutes < 195) {
    performanceLevel = 'Advanced';
  } else {
    performanceLevel = 'Amateur';
  }
} else {
  performanceLevel = 'Invalid gender';
}