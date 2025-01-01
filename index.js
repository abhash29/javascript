
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function mapArray(array, callback){
    for(let i=0; i<array.length; i++){
        array[i] = callback(array[i]);
    }
}
function callback(num){
    return num+2;
}
// mapArray(array, callback);
// console.log(array);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterArray(array, callback){
    return array.filter(callback);
}
function checkEven(val){
    if(val%2===0){
        return true;
    }
    else{
        return false;
    }
}

// const newArr = filterArray(array, checkEven);
// console.log(newArr);


const fs = require('fs');

function readFileCallback(filePath, callback){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.error("Error in reading the file", err);
            return;
        }
        console.log("File content before update:", data);
        callback(filePath);
    });
}

function callback(filePath){
    const newContent = "Abhash updated the file 2content";
    fs.writeFile(filePath, newContent, (err) => {
        if(err){
            console.error("Error in reading the file", err);
            return;
        }
    });
}


function parallelFileOperation(){
    ans = [];
    function readCallBackFn(err, data){
        if(err){
            throw err;
        }

        ans[0] = data;
    }

    function writeCallbackFn(err){
        if(err){
            ans[1] = 0;
        }
        else{
            ans[1] = 1;
        }
    }
    fs.readFile('a.txt', 'utf-8', readCallBackFn);
    fs.writeFile('b.txt', 'hello', writeCallbackFn);

    return ans;
}


//Write a function that returns promise that resolves after n seconds passed where n is passed as an argument to fun
function callback(){
    console.log("hello world");
}
function wait(n){
    return new Promise(resolve =>{
        setTimeout(() => {
            callback();
            resolve();
        }, n)
    });
}
// wait(5000).then(()=>{
//     console.log("The promise that has been resolved after n sec");
// });


//Write 3 diff fun that returns promises that resolve after 1, 2, and 3 secs resp 
//  * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
//  * Print how long it took for all 3 promises to resolve.

function waitOneSecond(){
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
}
function waitTwoSecond(){
    return new Promise(resolve=>{
        setTimeout(resolve, 2000);
    });
}
function waitThreeSecond(){
    return new Promise(resolve=>{
        setTimeout(resolve, 3000);
    });
}
function calculateTime(){
    const start = Date.now();
    Promise.all([waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond()])
    .then(()=>{
        const end = Date.now();
        console.log(`Time taken: `,end-start);
    })
}
calculateTime();


//Write 3 diff fun that returns promises that resolve after 1, 2, 3, secs resp
//Write a fun that seq call all of these funs in order

function waitOneSecond(){
    return new Promise(resolve=>{
        setTimeout(resolve, 1000);
    })
}
function waitTwoSecond(){
    return new Promise(resolve =>{
        setTimeout(resolve, 2000);
    })
}
function waitThreeSecond(){
    return new Promise(resolve =>{
        setTimeout(resolve, 3000);
    })
}
function calculateTime2(){
    const start = Date.now();
    waitOneSecond()
    .then(()=> waitTwoSecond())
    .then(() => waitThreeSecond())
    .then(()=>{
        const end = Date.now();
        console.log(`Time taken: `, end-start);
    })
}
calculateTime2();