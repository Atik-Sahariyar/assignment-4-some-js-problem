function cubeNumber(number){
    if(typeof number !== "number")
    {
        return "Please enter a positive number ";
    }
    
    let cube = number**3;
    
    return cube;
}
console.log(cubeNumber("Atik"));
console.log(cubeNumber(-6));
console.log(cubeNumber(3));
console.log(cubeNumber(6));
