// let keyword
// no redeclarations of identifier(let) is allowed
// no access of identifier(let) is allowed outside the blocked scope


// Const keyword
// no redeclarations of identifier/block-scoped variables
// no reassignment of identifier/block-scoped variables
//no access of identifier/block-scoped variables

let a = 23;
// let a = 34; //  redeclaration error 


// blocked scope
if(a==23)
{
    let b= 45;
    console.log(b);
}

//console.log(b); // blocked variable let cannot be accessed outside the blocked scope

// const

const d = 4;
// const d = 5; // error - cannot re-declare block-scoped variable d

if(d==4)
{
    const f = 'test'
    console.log(d);
}

// console.log(f) // error in accessing a block-scoped identifier f 

// d= 8;
//console.log(d); // this gives a runtime error -  Assignment to constant variable.