// print command
console.log('Hello');
// variables
a = 10; //non-declared variables
console.log(a);
var a = 10;
console.log(a);
{
    var a = 90;
    console.log(a);  
}
console.log(a);
//let
let b = 24;
console.log(b);
{
    let b = 25;
    console.log(b);
}
b = 26;
console.log(b);
//const
const c = 34;
console.log(c);
{
    const c = 35;
    console.log(c);
}
// not possible c = c6;
//console.log(c);

//datatype
console.log(typeof (a));
let firstName = "Maya";
console.log(typeof (firstName));
let isAvailable = true
console.log(typeof (isAvailable));
var t;
console.log(typeof (t));

var s = null;
if (s != null) {
    console.log(typeof (s)); 
}
console.log(typeof (s));


//arrays
let arr1 = [1, 2, 3, 4,'Mridula']
console.log(typeof (arr1));

console.log(arr1[4]);
console.log(arr1[5]);

//JS Objects
let p = {
    name:'Ammu',age:26,place:'Ekm'
}
console.log(p.place)

let car = new Object();
car.brand = 'hyundai';
car.model = 'i10';
car.color = 'black';
console.log(car);

//array of objects
var arr_obj = [{ name: 'Maya', location: 'Kochi' }, { name: 'Meera', location: 'Ekm' }]
console.log(arr_obj[1].location)

//Operators
let t1 = 8;
console.log(t1 += 3);

//Increment operators
let inc = 7;
let post = inc++;
let pre = ++inc;
console.log("inc :" + inc + " post " + post + " pre " + pre);

//Conditional
if (inc==post) {
    console.log("post value equal")
} else {
    console.log("pre value equal")  
}

let x = 7, y = '7';
//Equal to operatoe
if (x == y) {
    console.log("Equal");
}
//Strict equal to operator
if (x === y) {
    console.log("Equal");
}

//function
function addval(a, b) {
    console.log('sum is',a + b);
}
function subval(a, b) {
    console.log('difference is', a - b);
}

function mulval(a, b) {
    console.log('product is', a * b);
}

function divval(a, b) {
    if (b != 0)
        console.log('quotient is', a / b);
    else
        console.log('division is not possible');
}
addval(9, 10);
subval(19, 10);
mulval(9, 10);
divval(90, 9);


