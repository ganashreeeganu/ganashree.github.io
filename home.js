
console.log("My First JS Code");

var a=10;   /* variables*/
var b=20;

if(a+b>50)               /*if else */
{
    console.log(a+b);
}
else if(a+b<10)
{
    console.log(a+b);
}
else
    console.log(a+b);

for (var num=0; num<11; num=num+2)   /* for loop*/
    console.log(num);

var a=[1,2,3,4];             /* foreach*/

a.forEach(item=>console.log(item));

var num=0;
while(num<5)        /* while loop*/
{
    console.log(num);
    num++;
}
do{
    console.log(num);
    num++;
}while(num<5)

var itr=10;        /* unary operarator*/
console.log(itr++);//10
console.log(itr);//11

console.log(++itr);//12
console.log(itr);//12

var num1=10,n=8;   /*shift operators*/
console.log(num1<<n);//2560
console.log(num1>>n);//0

console.log("Global Scope");
for(var g_scope=1; g_scope<5;g_scope++)
{
    console.log(g_scope);
}
 console.log(g_scope); //Global Scope


 console.log("Block Scope");
 for(let b_scope=1;b_scope<5;b_scope++)
 {
    console.log(b_scope);
 } 
   console.log(b_scope);//Error (Block Scope)

const a=10;     /*let keyword*/
console.log(a);

for(let n=0;n<5;n++)

    console.log(n);

 console.log(n);

 for(let declare_again=1;declare_again<5;declare_again++) /*let declaration*/
 {
    console.log(declare_again);
 }
 var declare_again=1;
     console.log(declare_again); //different block No Error.

 var declare=5;
 console.log(declare);

 let declare=5;                 //Same block ERROR
   console.log(declare);

 var arr=[1,2,3,4];             /*array*/
 console.log(arr[2]);//3
  var arr1=[    2,34,5,6,,7];
  console.log(arr1[4]);    //undefined

  arr.push("lemon");        //array push pop
  arr.push("yellow");

  console.log(arr.pop());

arr.unshift(1000);      //array shift & unshift
arr.unshift(10);
console.log(arr[0]);
console.log(arr.shift());

var b_arr=[1,2,3,4,5,6];   //slice
var new_barr= b_arr.slice(0,4);

var c_arr=[1,2,3,4,5,6];
var new_barr= c_arr.slice(0,4);
print();


function print()
{
    console.log("happy");
}



