function getRandomnum(min, max) {
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (1+ max - min)) + min
}
console.log(getRandomnum(1,100));


