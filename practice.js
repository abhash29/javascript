var users = ["abhash", "pranjal", "devansh"];
console.log(users);
console.log(users[0]);
for(let i=0;  i<users.length+1; i++){
    console.log(users[i]);
}

//Array of objects
let info = [{name: "Abhash", age: 21},
    {name: "Pranjal", age: 15},
    {name: "Devansh", age: 22},
    {name: "Yash", age: 10},
    {name: "Rohit", age: 31},
];
console.log(info);

//create a fun to print details
function printInfo(users){
    for(let i=0; i<users.length; i++){
        console.log("Name: "+users[i].name+" and age: "+users[i].age);
    }
}
printInfo(info);


//function to write sum 1-to-100
function sum(startIdx, endIdx){
    var val=0;
    for(let i=startIdx; i<=endIdx; i++){
        val+=i;
    }
    return val;
}
console.log(sum(1, 5));


//Making up of simple calculator
function add(num1, num2){
    return num1+num2;
}
function sub(num1, num2){
    return num1-num2;
}
function div(num1, num2){
    return num1/num2;
}
function mul(num1, num2){
    return num1*num2;
}
function calculator(num1, num2, operation){
    if(operation=='+'){
        return add(num1, num2);
    }
    else if(operation=='-'){
        return sub(num1, num2);
    }
    else if(operation=='*'){
        return mul(num1, num2);
    }
    else{
        return div(num1, num2);
    }
}
console.log(calculator(100, 20, '/'));


//fibonacci using js
function fibo(n){
    let val = [n];
    val[0]=0;
    val[1]=1;

    for(let i=2; i<n; i++){
        val[i]=val[i-1]+val[i-2];
    }
    return val;
}
console.log(fibo(10));


//print pattern
function pat(row, col){
    for(let i=1; i<=row; i++){
        let line='';
        for(let j=1; j<=i; j++){
            line+='*';
        }
        console.log(line);
    }
}
pat(5, 5);

//I will learn further things such as async and etc and make my lang better in learning