function multiply(a, b){                //Multiply
 return a * b
  }


  function evenOrOdd(number) {              //Even or Odd
  if (number % 2==0){
    return 'Even';
  }else{
    return 'Odd';
  }
  
}


function positiveSum(arr) {                 //Sum of Positive
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}


function removeChar(str) {                  //Remove first and Last character
  return str.slice(1, -1);
}

function makeNegative(num){                 //Return negative
  if (num<0){
    return num;
  }else{
    return num * -1;
  }
}

function repeatStr (n, s) {                 //string return
  return s.repeat(n);
}

function noSpace(x){                        //Remove String Spaces
   return x.replace(/ /g,'')
}

var summation = function (num) {                //Summation
  
  let sum =0;
  
  for (let i=1; i<=num; i++) {
    sum= sum+i;
  }
  
  return sum;
}


class SmallestIntegerFinder {               //find the smallest integer in array
  findSmallestInt(arrayOfNumbers) {
    
    let smallestNumber;
    for (let i=0; i< arrayOfNumbers.length;i++) {
      
      const arrNumber = arrayOfNumbers[i];
      
      if (i==0){
        smallestNumber =arrNumber;      
    }
    
    if (arrNumber < smallestNumber){
      smallestNumber = arrNumber;
    }
    
  }
  
  return smallestNumber;
}
}


function solution(str){                     //  Reversed string
  const arr= str.split("");
  const reversed = arr.reverse();
  const finalAnswer =reversed.join("");
  
  return finalAnswer;
}

function countSheeps(arr) {                 //count sheep
  return arr.filter(Boolean).length;            
}


function isDivisible(n, x,y){                   //Is n divisible by x and y
  
  const result1 = n/x;
  const result2 = n/y;
  
  if (result1 % 1 ==0 && result2 % 1==0){
    return true;
  } else{
    return false;
  }
}


function century(year) {                                //Century from year
  return (year + 99) / 100 | 0;
}


function basicOp(operation, value1, value2) {       //Basic Mathematical operations
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}


function maps(x){         //Beginner :lost without a Map

  var newArr = [];
  
  x.map(function(y){
    newArr.push(y*2);
});

return newArr;

}


function points(games) {                    //Total amount of points
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}


function greet(name){                           //Jenny's secrete message
  
  if(name === "Johnny")
    return "Hello, my love!";
  
  return "Hello, " + name + "!";
}


function getAverage(scoreArray){                //Get the Mean of array
  const count=scoreArray.length;
  let sum=0;
  
  
  for (let i=0; i<count; i++) {
    sum= sum+ scoreArray[i];
  }
  
  const avg =sum / count;
  const roundedDown =Math.floor(avg);
  
  return roundedDown;
}



function arrayPlusArray(arr1, arr2) {                   //Array plus array
  var suma=0;
  for(var i=0;i<arr1.length;i++)
    suma+=arr1[i];
  for(var i=0;i<arr2.length;i++)
    suma+=arr2[i];
  return suma;
}


const rps = (p1, p2) => {               //Rock ,Scissor,Paper
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };
  
  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
}



hero = (bullets, dragons) =>{                   //Is he alive
if (bullets/2 >= dragons) {
  return true;
}
else {
  return false;
}
}
hero = (bullets, dragons) =>{
if (bullets/2 >= dragons) {
  return true;
}
else {
  return false;
}
}



function stringToArray(string){                         //convert  a string to array
  return string.split(' ');
}


const humanYearsCatYearsDogYears = (humanYears) => {        //cat years,dog years
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}


function getCount(str) {                    //vowel count
  var vowelCount = 0;
  for (index in str){
    switch (str[index]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        vowelCount++;
        break;
    }
  }
  return vowelCount;
}
