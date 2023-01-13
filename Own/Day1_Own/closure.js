

const myfunction=(name)=>{
    name="Ashish"; // i have override the name
    const myfunction2=()=>{
        console.log(name);
    }
    myfunction2();
}
myfunction('Aashu');

//this is a example of closure,in this myfunction2 
//will be able to access the name variable outside it's scope