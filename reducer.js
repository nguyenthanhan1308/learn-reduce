const numberArray = [1,2,3,4,5,6,7,8,9]
const textArray = ["a","b","c","d","e"]
const  sum = (total, number) => {
    return total + number;
}
const numReduce = numberArray.reduce(sum);
const textReduce = textArray.reduce(sum);
console.log(numReduce)
console.log(textReduce)