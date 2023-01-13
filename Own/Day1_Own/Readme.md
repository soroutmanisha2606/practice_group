

 # Day1
## Promises

### Definition :
```
Promise are used to handle asynchronous operations in js.They are easy to handle when dealing with multiple asynchronous operations where callbacks can create callback hell which can be result into a problem or we can say unmanegable code

A promise has basically three states
    1.pending   =>in this the promise is pending not fulfilled neither rejected

    2.fulfilled     =>in this the promise if fullfilled it means action related to the promise get succdeed

    3.rejected  =>in this state the promise got rejected means the action related to that promise got failed


With the help of then,catch we can resolve a promise or we can say handle a preomise
```
### USECASES :
```
    1.While fetching the api
    2.used for handling the asynchronous events
```
### General Syntax :
```
let promise=new Promise((resolve,reject)=>{
    if(x>1){
        resolve();
    }
    else{
        reject();
    }
})

promise.then((res)=>{
    console.log("Hii resolved");
},(err)=>{
    console.log("Hii rejected");
}).catch((err)=>{
    console.log(err);
})
```

### Example :
```
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

```
### Extra Information :
```
    Basically promises take one argument that is callback function and that callback function takes two arguments  one is resolve and another one is reject 
    we have to perform action inside callback
```

## Closure

### Definition :
```
A closure gives you access to an outer function's scope from an inner function
OR we can say it is a combination of functions bundled together with reference to its surrounding stata(lexical environment).
```
### USECASES :
```
Some use cases are like 
    1.used in data privacy
    2.event handlers
    3.currying
    4.callback etc...
```
### Example :
```
const myfunction=(name)=>{
    name="Ashish"; // i have override the name
    const myfunction2=()=>{
        console.log(name);
    }
    myfunction2();
}
myfunction('Aashu');

```

### Extra Information :
```
We can simply use closures while creating funciton inside functions.
```