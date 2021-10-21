//loop 1 - sum of every # 1 - 1000
let number = 1000, i = 1, sum = 0
while (i <= number){
sum += i;
i++
}
console.log(sum)
//loop 2 - sum of every odd #from 93 to 845
let oddsum = 0
for(let j = 93; j <= 845; j++){
    if(j%2 == 1){
        oddsum += j }
}
console.log(oddsum)

//loop 3 - product of every # that is divisible by 6 from 1 - 400 
let product = 1
for(let s = 1; s <= 400; s+=6){
       product *= s
}
console.log(product)
//loop 4 - determine if an input is prime or not
let primey = true
let input = parseInt(prompt('input a number'))
 if(input===2){
    console.log('2 is prime')
}
else{
    for(let a = 2; a < input; a++){
        if (input % a == 0){
            primey = false;
            break;
        }
    }
if(primey == true){
    console.log(input + ' is prime');
} else{
    console.log(input + ' is not prime')
}
}
//loop 5 - every prime number 1 - 100
let d = 10;
let primenum = ''
prime1:
for(let c = 2; c <= d; c++ ){
    for(let e = 2; e < c; e++){
        if(c%e == 0) continue prime1;
primenum = primenum + e
    }
}
console.log(primenum)

//loop 6 - find the factorial of a number

//loop 7 - find the greatest common factor of any two input numbers

//loop 8 - create a loop that will create a diamond of size x

//loop 9 - create a loop that will create a triangle of size x

//loop 10 - calculate  series

//loop 11 - fill out the Fibonacci series

//loop 12 - create a square made of numbers