// # Review 4 - For loops

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.

for(i=0;i<=10;i++){
    console.log(i)
}

console.log("______________")
// 2. Make a loop that prints the numbers from 10 to 20.

for(i;i<=20;i++){
    console.log(i)
}

console.log("______________")
// 3. Make a loop that prints the numbers from -10 to 10.

for(i=-10;i<=10;i++){
    console.log(i)
}
console.log("______________")
// 4. Make a loop that prints the numbers from 10 to -10.

for(i=10;i>=-10;i--){
    console.log(i)
}

console.log("______________")
// 5. Make a string. Then, make a loop that prints all the individual characters of that string.

const long_string = "Heute hatte ich ein leckeres essen in Düsseldorf"

for(char of long_string){
    console.log(char)
}
console.log("______________")
// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.

const fiver_array= ["haus","maus","raus","saus","braus"]
for(item of fiver_array){
    console.log(item)
}
console.log("______________")
// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.

const sixer_array= ["haus","maus","raus","saus","braus","laus"]
for(i=0;i<sixer_array.length/2;i++){
    console.log(sixer_array[i*2])
}
console.log("______________")
// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.

for(i=0;i<sixer_array.length/3;i++){
    console.log(sixer_array[i*3])
}
console.log("______________")

// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.
const ten_array=[1,2,3,4,5,6,7,8,9,10]
for(i=1;i<ten_array.length;i+=3){
    console.log(ten_array[i])
}
console.log("______________")
// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.
const obj_array=[
    {counter:1},
    {counter:2},
    {counter:3},
    {counter:4},
    {counter:5},
    {counter:6},
    {counter:7},
    {counter:8},
    {counter:9},
    {counter:10},
]
for(item of obj_array){
    console.log(item.counter)
}
console.log("______________")

// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.
const random =Math.round(Math.random()*100)
console.log(random+"<-------"+"random number")
for(i=1;i<=100;i++){
    console.log(i)
        if(i===random){
            
            console.log(i)
            break
        }
    
}