//Behaviour of "this" with Browser & Non Strict Mode 
console.log(this); // o-p Window object which has all the javascript methods in it. 


// "this" with Regular function 
function Check(){
    console.log(this);
}
 // O/P Window object which has all the javascript methods in it.

 // "this" with a method inside an object
 let obj ={
    name:"sam",
    myFunc : function (){
        console.log(this);
    }
 }

 // O/P Window object which has all the javascript methods in it.


 // "this" with a function inside a method of an object
 let obj1 = {
    class :"A",
    myFun2 : function(){
        function myFunc3(){
            console.log(this);
        }
        myFunc3();
    }

 }
 obj1.myFun2();

 // O/P -> This also returns a window object with all the javascript methods 