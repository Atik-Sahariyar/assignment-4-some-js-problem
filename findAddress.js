function findAddress(obj)
{
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
    
    if(typeof obj !== 'object')
    {
        return "Please enter your address ";
    }
    let address = `${street},${house},${society}`;
    return address;
}

let address1 = {street:10, house:'15A' ,society:'Earth Perfect' };
console.log(findAddress(address1));
let address2 ={street:10, society:'Earth Perfect'}
console.log(findAddress(address2));
let address3 = {street:10}
console.log(findAddress(address3));
