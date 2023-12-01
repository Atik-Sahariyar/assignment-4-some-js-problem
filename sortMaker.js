function sortMaker(arr) {
if(!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number')
{
    return "Please enter a array of two numbers";
}
else if(arr[0] === arr[1])
{
    return "Equal";
}
else if(arr[0]<0 || arr[1]<0)
{
    return "Invalid Input"
}
else
{
  if(arr[0] < arr[1])
  {
    const temp = [arr[1], arr[0]];
    return temp;
  }
}
return arr;
}

console.log(sortMaker(3));
console.log(sortMaker("Atik"));
console.log(sortMaker([0,1]));
console.log(sortMaker([-2,3]));
console.log(sortMaker([2,5]));
console.log(sortMaker([4,2]));
console.log(sortMaker([4,-2]));
console.log(sortMaker([4,4]));
