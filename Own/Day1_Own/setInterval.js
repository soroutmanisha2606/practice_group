
let time=1;
const timer=(delay)=>{
    let ID=setInterval(()=>{
        console.log(`HII ${time} time`);
        time++;
        if(time==4){
            console.log('timer is 4 here')
            clearInterval(ID)
        }
    },delay)
}

timer(1000);