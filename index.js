/* */

document.write("welcome to javascript")
document.write("hello")
/*variable decleration 
must start with alphabet , underscore,are $ dolar symbol
*/
var a = 110
var _b = 20
var $c = 30

/*case sesitive */

var FirstName = "saidulu"
var firstname = "sai"
var firstName = "pulipati"

document.write(FirstName)
document.write(firstname)
document.write(firstName)

/*let keyword

let is used to decleare a block scoped variable
*/

let x = 10
if (x > 5) {
    let y = 20;
    document.write(y)
}
/**document.write(y) */
/**o/p : error */

/*const key word
const is used to const values this means it is not possible to assign a new value to const variable 

ex

const a=5;
document.write(a)

a=6
document.write(a)

o/p: error
*/

/*scopes
refers to visibility of variable and functions with in a program 
3 types of scopes

1-global
2-function
3-block v 

*/

/*global scope 
is the outer most scope in a javascript program variables and functions decleraed in the globalscope are visible from anywhere in the program
*/

var massage = "hello everyone";
function greet(){
    document.write(massage)
}

greet()

/**functional scope
 variables which are created in functional scope are only visible in that function only
 */

 function add(){
    var num1 = 20
    var num2=30
    document.write(num1+num2)
    document.write(num1)
 }

 add()
/*
 document.write(mum1)

 shows error 
 */

 /**block scope 
  * 
  * block is a group of statements that are enclosed with in curly braces({})
  * block scope variable only visible in that block only 
  */

 function example(){
    if(True){
        var bv="block scope"
        document.write(bv)
    }
 }

 example();

 document.write(a)
 

