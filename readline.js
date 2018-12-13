const readline=require('readline');
const rl=new readline.createInterface({input:process.stdin,
                                        output:process.stdout});
let num1=5;
let num2=6;
let sum=num1+num2;

rl.question(`what is ${num1} + ${num2}?\n`,
(userInput)=>
{
    if(userInput.trim()==sum)
    {
        rl.close();
    }
    else{
        rl.setprompt("incorrect response please try again\n");
        rl.prompt();
    }
    console.log(userInput);
})
rl.on('close',()=>{
    console.log("correct answer");
})