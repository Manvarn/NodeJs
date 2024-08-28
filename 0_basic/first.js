// const bankacc = require('./arith')
// // console.log(math) //[Function: dosum]  //{ dosum: [Function: dosum], dosub: [Function: dosub] }

// console.log(math.dosum(10,20)) //30
// console.log(math.dosub(30,20)) //10
// console.log(math.domul(30,20)) //600
// console.log(math.dodiv(20,5)) //15
// // dosum(10,20)

// console.log(bankacc.deposite(3000,5000))
// console.log(bankacc.withdraw(10000,4000))

// 1) read
    // readfile(-,-)
    // readfilesync(-,-)
// 2) write
// 3) append
// 4) delete
// 5) close

// const fs = require('fs');
// console.log (fs);
// fs.readFile("myfile.text",(err,data)=>{
//         if (err) throw err
//         // console.log(data())
//         console.log(data.toString())
//     })
    
    // let data = fs.readFileSync("myfile.text");
    // console.log(data())
    // console.log(data.toString())
    
    
    // ------------------------------write file
    // => one time create folder and new value print 

    // const fs = require('fs');
    // console.log (fs);
    // let text = " hello who are you ? ";
    // fs.writeFile("myfile1.txt",text,(err)=>{
    //         if(err) throw err
    //         console.log("file write success....")
    //     })

    
        
        

        // fs.writeFileSync("myfile2.text",text);
        // fs.writeFileSync("demo.txt",text);
        // fs.writeFileSync("file1.txt",text);
        
        
        
        // ------------------------------append file

// => folder create and run more times value printed

        // const fs = require('fs');
        // console.log (fs);

        // let text = "\n hello who are you ? ";
        // fs.appendFile("myfil1.txt",text,(err)=>{
        //         if(err) throw err
        //         console.log("file write success....")
        //     })

// let data = fs.appendFileSync("myfile2.txt",text);
// console.log("file write success....")

// ------------------------------

// --------------------- 06-05-2024 --------------------------

// -------- fs.rename (rename file)-----------

// const fs = require('fs');
// // console.log (fs);

// fs.rename("demo.txt","reName.txt", remainingCompleted);
// function remainingCompleted(error){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File Renamed...");
//     }
// }
// --------------------------------------------


// -------- fs.unlink (deleted file)-----------

// const fs = require('fs');

// fs.unlink("reName.txt",(err)=>{
//     if(err) throw err;
//     else{
//         console.log("file deleted successfully !!!");
//     }
// });

// --------------------------------------------


// const fs = require('fs');
// let text = " hello who are you ? ";
//     fs.readFile("myfile1.txt",text,(err)=>{
//             if(err) throw err
//             console.log("file write success....")
//             fs.appendFile("myfil1.txt",text,(err)=>{
//                         if(err) throw err
//                         console.log("file write success....")
//                     })
//         })


      
// const fs = require('fs');
//     // console.log (fs);
//     let text = " ";
//     fs.writeFile("test1.txt",text,(err)=>{
//             if(err) throw err;
//             console.log("file write success....")

//             fs.rename("test.txt","test2.txt", remainingCompleted);
//             function remainingCompleted(error){
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log("File Renamed...");
//             }
//         }
// })



// ----------------- copy file ------------------

var fs = require("fs");
// var content = " we're having fun at while learning node";
fs.readFile("file1.txt", readingCompleted);

function readingCompleted(error, data) {
    if (error) {
        console.log(error);
    }
    else {
        fs.writeFile("file1_copy.txt", data, writingCompleted);
        function writingCompleted(error, data) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("file copied..");
            }
        }
    }
}
    