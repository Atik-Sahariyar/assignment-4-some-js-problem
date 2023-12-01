function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string')
    {
        return "Please enter two string ";
    }
    else
    {
        if(string1.includes(string2))
        {
            return true;
        }
    }
   return false;

}
console.log(matchFinder(2,'as'))
console.log(matchFinder("Atik Sahariyar", "Atik"));
console.log(matchFinder("Atik Sahariyar", "atik"));
console.log(matchFinder("Peter Parker", "Pen"));

