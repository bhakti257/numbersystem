const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
function printevenodd(arr){
Even= []
Odd=[]
for (const number of arr){
    if (number%2===0){
        Even.push(number);
    }
    else{
        Odd.push(number);
    }
}
console.log (Even)
console.log(Odd)}

printevenodd(numbers);