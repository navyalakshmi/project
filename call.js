
    /*const x=function(){
        console.log("hii");
    }

    const y=function(callback){
        console.log("world");
        callback();
    }
    y(x);
     */
    let mul=function(c,d)
     {
         return (c*d);
     };
    let add=function(num1,num2)
    {
        return num1+num2;
    };
    let calc=function(nu1,nu2,back1,back2)
    {
         console.log(`addition of ${nu1} and ${nu2} is: `  +back1(nu1,nu2));
         console.log(`multiplication of ${nu1} and ${nu2} is: `+back2(nu1,nu2));
    };
    calc(2,4,add,mul);



