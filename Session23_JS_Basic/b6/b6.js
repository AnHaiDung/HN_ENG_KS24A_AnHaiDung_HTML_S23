// false, 0, "", null, undefined, NaN 
let array = ["", false, 0, 5, 10, "Hello world!"];

for(let i = 0; i < array.length; i++){
    if(array[i] === false || array[i] === 0 || array[i] === "" || array[i] === null || array[i] === undefined || isNaN(array[i])){
        array.splice(i, 1);
        i--;
    }
}
console.log(array);