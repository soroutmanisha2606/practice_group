
let val;
const handleInput=(e)=>{
//    console.log('inside handleInput')
   val=e.target.value;
   debounced();
}


const debounce=(func,delay)=>{
    // console.log('inside debounce')
    let timer;
    return function(){
        // console.log('inside return func');
        if(timer){
            // console.log('inside timer');
            clearTimeout(timer);
        }
        timer=setTimeout(()=>{
            func();
        },delay)
    }

}

const fun=()=>{
    // console.log('inside fun')
    console.log(val);
}
const debounced=debounce(fun,2000);