//1 — Looping Through an Array

const numbers = [10, 20, 30, 40];
//using for loop
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
    
// }

//using foreach()
// numbers.forEach(num=>{
//     console.log(num);
// })

// //for...of loop
// for(let number of numbers){
//     console.log(number);
    
// }

//for..in loop
for(let k in numbers){
    console.log(numbers[k]);
    
}


//2) — Loop Through an Object

const student = {
  name: "Bala",
  age: 21,
  grade: "A"
};

//using for...in loop

// for(let k in student){
//     console.log(k,student[k]);
    
// }

//3) — Using map()

// const marks = [50, 60, 70, 80];
// const finalmarks=marks.map(num=>num-10)
// console.log(finalmarks);

//4 — Using filter()

// const values = [5, 12, 8, 25, 3, 15];
// const finalvalues=values.filter(num=>num>10)
// console.log(finalvalues);

//5-using reduce()

const arr = [5, 10, 15, 20];

const total = arr.reduce((sum, num) => sum + num, 0);

console.log(total);