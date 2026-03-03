/**data types */
document.write("welocme to data types")

/**data type are 2
 * 
 * primitive
 * 1-srtrings
 * 2-numbers
 * 3-boolean
 * 4-null
 * 5-undefined 
 * 6-big int
 * 7-symbol
 * 
 * 
 * reference or non premitive
 * 
 * object
 * array
 * function 
 */

/**string
 */

var strings = "apple"
document.write(strings)

/**conditional statement  */

if (true) {
    document.write("saidulu")
}
if (true) {
    document.write("super")
}

let a = true;
let message = " ";

switch (typeof a) {
    case "number":
        message = "number"
        break;
    case "string":
        message = "string"
        break;
    case "boolean":
        message = "bool"
        break;
    default:
        message = "others"
}

  document.write(message)