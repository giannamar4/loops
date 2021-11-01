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
function isPrime(primey){
    for(let p=0;p<primey;p++){
        if (primey % p ==0){
            return false;
    }
       else {return true
}
}}
console.log(isPrime(7))

//loop 5 - every prime number 1 - 100
for(let a=1;a<=100;a++){
    let temp = 0;
    for(let b = 2;b<a;b++){
        if(a % b ==0){
            temp = 1;
            break;
        }
    }
    if(a>1 && temp == 0){
      console.log(a)
    }
    }
//loop 6 - find the factorial of a number
function factorial(input){
    fact = 1
    for(let c =input;c>=1;c--){
      fact = fact * c
    
    }
    console.log(fact)
  }
  factorial(5)
//loop 7 - find the greatest common factor of any two input numbers
function gcf(no1,no2){
    let cFact = 1
    if(no1 > no2){
       cFact = no2
    }
    else{
      cFact = no1
    }
  while(no1 % cFact !=0||no2 % cFact != 0){
    cFact--
  }
  console.log(cFact)
  }
  gcf(18,24)
//loop 8 - create a loop that will create a diamond of size x

//loop 9 - create a loop that will create a triangle of size x

//loop 10 - calculate  series

//loop 11 - fill out the Fibonacci series

//loop 12 - create a square made of numbers