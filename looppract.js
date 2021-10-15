/*/loop 1
let number = 1000, i = 1, sum = 0
while (i <= number){
sum += i;
i++
}
console.log(sum)
loop 2
let oddsum = 0
for(j = 93; j <= 845; j++){
    if(j%2 == 1){
        oddsum += j
    }
}
console.log(oddsum)

loop 4/*/
  num = prompt('pick a Number.')
    for (i = 2; i <= num; ++i) {
      if (num % i == 0) {
         let prime = true; 
        break;
      }
      if (num % i != 0){
          let prime = false;
          break;
      }
    }

    if (prime = true){
      console.log(`${num} is a prime number`);
    }
    else{
      console.log(`${num} is not a prime number`);
    }

