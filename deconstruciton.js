var arr1 = [1,2,3,45,6,7,9];

var[one,two,three] = arr1;

console.log(three);

//spread

var a,b,rest;
[a,b, ...rest] = arr1;
console.log(a,b,rest);


//object deconstrutiong

var o = {
    name : 'akshay',
    age : 25
}

var {p,q} = o;
console.log(o);
