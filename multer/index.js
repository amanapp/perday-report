const express= require('express');
const fs = require('fs');

const multer =require('multer');

const app= express();
  
const fileStorage=multer({
    storage: multer.diskStorage({
        destination:(req, file ,cb)=>{
            cb(null ,'upload')
    
        },
        filename:(req,file,cb)=>{
            cb(null,`file${file.fieldname}`)
        }
    })
}).any();


const upload= multer({storage:fileStorage});

// upload files
app.post("/single",fileStorage,(req,res)=>{
    res.send("file is upload");
})

app.get("/merge",(req,res)=>{
    // res.send("file is upload");
    const resultFileName =`./backup/RES___${Date.now()}.txt`;

    const file1 = './upload/file1';
    const file2 = './upload/file2';
    //const des = `./backup/`;


    function mergeFiles(file1, file2, des) {
        // Read the contents of the first source file
        fs.readFile(file1, 'utf8', (err, data1) => {
          if (err) throw err;
      
          // Read the contents of the second source file
          fs.readFile(file2, 'utf8', (err, data2) => {
            if (err) throw err;
      
            // Concatenate the contents of both files
            const mergedData = data1  + data2;
      
            // Write the merged data to the destination file
            fs.writeFile(resultFileName, mergedData, 'utf8', (err) => {
              if (err) throw err;
           
              console.log('Files merged successfully!');
            });
          });
        });
      }

      mergeFiles(file1, file2, resultFileName);

})



// display merge file
app.get("/display",(req,res)=>{
    fs.readFile('./backup/result','utf-8',(err ,data)=>{
        console.log(data);
        res.send(data);
     })
    
})

app.listen(5000);