//looping statements
//wap to print 1-10
for (let i = 1; i <= 10; i++){
    console.log(i)
}
//create an array with 5 elements and print all the elements
let arr1 = ['apple','orange','kiwi','grapes','mango']
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    
}
//another way -- for of
for (x of arr1)
{
    console.log("-"+x)
}
let p1 = { name: 'joe', age: 27, place: 'ekm' }
for (x in p1) {
    console.log(p1[x])
}

//while loop
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}
i = 0;
while (i <  arr1.length) {
    console.log(arr1[i])
    i++;
}

// do- while

let k = 1;
do {
    console.log(k);
    k++;
}while(k<=10)