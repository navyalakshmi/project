const fs=require('fs');
// creating foldrs
/*fs.mkdir('tutorial',(err)=>   //takes  2 args one is name of the folder other is callback
{
    if(err)
    {
        console.log(err);

    }
    else
    {
        console.log('folder created successfully');
        fs.writeFile('./tutorial/examp.txt','hii!!!',(err)=>{  //creating file inside a folder
                    if(err)
                      console.log(err);
                    else 
                       console.log("file created successfully");
                });
     }
})*/

// removing folder
/*fs.unlink('./tutorial/example2.txt',(err)=>{
    
    if(err)
    console.log(err);
    else{
        fs.rmdir('./tutorial',(err)=>{
            if(err)
            {
                console.log(err);
            }
            else
            console.log('folder deleted successfully');
        });
    }
});*/
//removing folder when we have multiple files in folde
fs.readdir('tutorial',(err,files)=>{
    if(err)
      console.log(err);
    else{
        for(let file of files)
        {
            fs.unlink('./tutorial'+file,(err)=>{
                if(err)
                 console.log(err);
                else
                  console.log("successfully deleted files");
            })
        }
    }
})