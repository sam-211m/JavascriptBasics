

function checkData(data)
{
   
    if(data === {age: 18}) // here also, a new object is created in the memory
        console.log('you are an adult');
    else if(data == {age : 18}) // here too, a new object is created in the memory which doesnt match the refernce of the passed object 
        console.log('you are literally an adult')
    else
        console.log('you are not an adult');

}

checkData({age : 18}) // a new object is created in the memory