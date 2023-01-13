


let promise=new Promise((res,rej)=>{
    let x=5;
    if(x>3){
        res('You are resolved');
    }
    else{
        rej('you are rejected');
    }
})
  

promise.then((res)=>{
    console.log('resolved');
},(rej)=>{
    console.log('rejected');
}).catch((err)=>{
    console.log(err);
})