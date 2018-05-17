//console.log(process.argv);
argArray = process.argv;
/*var summation = function(acc, curr){
    curr *= 1;
    console.log(typeof curr);
    if (typeof curr == "number"){
        acc += curr;
    }
    return acc;
}
console.log(argArray.reduce(summation, 0));*/
//console.log(summation);
var sum = 0;
for(var x = 2; x <= argArray.length-1; x++){sum += argArray[x]*1;}
console.log(sum);