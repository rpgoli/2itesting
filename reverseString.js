//Implement revrese string
function reverseString(str) {
    var empty_str = "";
    for (let i= str.length-1; i>=0; i--) 
    {
        empty_str += str[i];
    }
return empty_str;
}
console.log(reverseString("priya"));
