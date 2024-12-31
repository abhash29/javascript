
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



