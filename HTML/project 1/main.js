// JAVASCRIPT START
//NB: semicolons not must but recommended for better readable code
/* DATA TYPES
undefined, null, boolean, string, symbol, number and object
*/

// DATA TYPES DECLARATIONS
function dataTypes(){
var MyName = "Beau"; //can be used throughout program
MyName = 8;
let OurName = 'Free Code Camp'; //will be used within the scope of where you declared that
const pi =3.142; //variable that cannot be changed later
MyName++ // or MyName = MyName + 1
MyName--
MyName = 11 % 3 //gives remainder of division
MyName += 12 //MyName = MyName + 12
MyName -= 12 //MyName = MyName - 12
MyName *= 12 //MyName = MyName * 12
MyName /= 12 //MyName = MyName / 12

var myStr = "I am a \"double quoted string\" inside another \"double quotes"
var myStr = 'I am a "double quoted string" inside another "double quotes"'
var myStr = `'I am a "double quoted string" inside another "double quotes"'`

/* ESCAPING CHARACTERS
\' single quote
\" double quotes
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myStr2 = "firstline\n\t\\secondline\nthirdline"

lL = myStr.length
iI = myStr[1]
}


//ARRAYS
function arrayS(){ 
var myArray = ['John', 54]
var myArray2 = [['John' , 50 , true], ['Jane', 40]]
myArray3 = [[1,2,3],[4,5,6],[7,8,9], [[10,11,12],13,14]]
myArray[1] = 'a'
myData = myArray3[2][1]
myArray.push(['Happy', 'ok'])
/* others .pop() ->removes the last item
.shift() -> removes first element
.unshift('add sth') ->adds to beginning of array
*/
console.log(myArray)
}


//FUNCTIONS
function reuse(a,b){ //a & b are arguments and data will be inserted when calling function
    console.log(a-b)
}

