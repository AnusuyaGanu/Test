const file = require('fs')

file.writeFile('newfile.txt',"Here is the result",(err,result)=>{
    if(err){
        console.log("cannot write");
    }else{
        console.log("written");
    }
})

file.readFile('callback.js','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
})