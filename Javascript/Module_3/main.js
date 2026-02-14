// modularity helps us to segregate our code in a better way
// we import using import keyword in ES modules 

import {add,sub,mul,div} from './calculator.js'; // this line imports calculator module

add(2,3);
sub(6,3);
mul(3,4);
div(3,4);


console.log(typeof (new (class { class () {} })))

