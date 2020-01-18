let numValue1 = 10;
let numValue2 = 20;

console.log(numValue1 + numValue2); //30

let strValue1 = "Deepa";
let strValue2 = "Prakash";

console.log(strValue1 + " " + strValue2); //Deepa Prakash


//BAD PRACTICE
//Mutable stage - Can be changed
//Another way of displaying the same
let result =  strValue1 + " " + strValue2;
console.log(result); //Deepa Prakash   
//Note- Every time you add more variable fot

//String Interpolation
let resultInterpolation = `` //(``) is called as backtick 

//`` == Can hold multiple lines, "" can hold only a single line.

//GOOD PRACTICE
//Immutable stage
let resultFinalInterpolation = `${strValue1}  ${strValue2}`;
console.log(resultFinalInterpolation);

//Note- Using backtick in string interpolation, it creates memory for variable only once hence it becomes immutable

//To inject something on WebPage through tags.

let template = `

<h1>

${strValue1}
${strValue2}

</h1>


`;

let template2 = `
${strValue1}
${strValue2}

`;

document.write(template); //To print on Page
document.write(template2);
//Note- document is the topmost object to perform any operation on UI within JS
//When response comes from the server, JS Engine(Interpreter), creates the instance of document and Windows.
//DOM creates the instances of all the tags in the document, through here, h1, tag is injected dynamically.
//Without tags as well, strings are placed somewhere on the Page body.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numValue3 = 1;
let numValue4 = 2;
let numValue5 = 3;

result = numValue3 + numValue4 * numValue5; 
console.log(result); //BODMAS rule is applied //7

result = (numValue3 + numValue4) * numValue5; 
console.log(result); //BODMAS rule is applied //9

let strValue3 = "4";
result = numValue3 + numValue4 + strValue3 + numValue5;
console.log(result); //343 --It Added first two parameters and concatenated the next, since the datatype is not number

result = numValue3 + numValue4 - strValue3 - numValue5;
console.log(result); //-4, Important to note that it concatenates the "+" but "-" is taken for subtraction

strValue3 = "Deepa";
result = numValue3 + numValue4 - strValue3 - numValue5;
console.log(result); //NaN

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ** Operator
let numValue6 = Math.pow(6,3)  //It is 6 raised to 3 i.e 6*6*6
console.log(numValue6); //216

numValue6 = 6 ** 3;
console.log(numValue6); //216 //Does the same work.


