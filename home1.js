 console.log(print(5,7)); //function

function print(a,b)
{
    return a+b;
}

var a=0;            //error in b
console.log(a);
print();
function print()
{
    var b=0;
    a=10;

}
console.log(a);         //function expression
console.log(b);

var prnt=function (){
    console.log("awsome");
}
prnt();//awsome

 var b=4;
 (function(a,b){console.log(a+b)     /*IIFE*/
}
) (4,4);                  

    /*methods of function*/
    function print()
    {
        console.log("hello");
    }
    print.call();

    print.apply();

    let animal={                    /*call() Apply() */
        name:'dog',
        eat(a,b){
            console.log(this.name + " is eating" + a +" "+ b);
        }
};
let human={
name:'Ramesh'
};
animal.eat(5,'bones');
animal.eat.call(human,10,'chips');
animal.eat.apply(human,[10,'chips']);

let ob=                 /*this keyword*/
{
  prnt:function () {
    console.log(this);
}
};
ob.prnt();

let ob1={               /*arrow function*/
    name:'fur',
    prnt:function() {
        console.log('a',this);
        var an_prnt= ()=>
        {
            console.log('b',this);
        }
            an_prnt();
    }
};
ob1.prnt();


class Box                   /*  Encapsulation*/
{
        constructor(length)
        {
            this.length=length;
            console.log("constructor called")
        }
        display(){
            console.log(this);
        }

}
let obj=new Box(20);
obj.display();

class Fruits            /*Inheritance*/
{
    constructor()
    {
        console.log("parent cons")
    }
}
class Apple extends Fruits
{
    constructor()
    {
        super();
        console.log("child cons");
    }
}
let obj1=new Apple();

class Fruits            /* Method Overloading*/
{
    constructor(color)
    {
        this.color=color;
    }
    print()
    {
        console.log(this);
    }
    print(size)
    {
        console.log(size);
    }
}

let obj2=new Fruits("red");
obj2.print(10);
obj2.print();

class parent        /*method Overridng*/
{
    live()
    {
        console.log("Iran");
    }
}
class Child extends parent{
    live(){
        console.log("India");
    }
}
var ob2 = new Child();
ob2.live();

function a(age)             /*throw keyword*/
{


    if(age<16)
    {
        try
        {
           throw new Error("you are under age"); 
        }   
        catch(error)
        {
            console.log(error);
         }
         finally{                       /*finly bloclk*/
            console.log("prgm ended");
         }
    }
    else
    {
        console.log("you can vote");
    }
}
a(13);