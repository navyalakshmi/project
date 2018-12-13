
    /*const x=function(){
        console.log("hii");
    }

    const y=function(callback){
        console.log("world");
        callback();
    }
    y(x);*/
     

    let add=function(num1,num2)
    {
        return num1+num2;
    };
    let calc=function(nu1,nu2,callback)
    {
        return callback(nu1,nu2);
    };
    console.log(calc(2,4,add));