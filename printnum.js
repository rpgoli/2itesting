var arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log("List of ten random numbers between 1 to 100")
console.log(arr);
console.log("Sorted list in descending order")
console.log(arr.sort((a,b)=>b-a));

