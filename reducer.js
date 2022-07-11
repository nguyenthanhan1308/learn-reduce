const numberArray = [1,2,3,4,5,6,7,8,9];
const textArray = ["a","b","c","d","e"];
const str = "hello world";
const scoresObject = [
    {
        name: "A",
        score: 10,
        proportion: 30,
    },
    {
        name: "B",
        score: 20,
        proportion: 30,
    },
    {
        name: "C",
        score: 40,
        proportion: 40,
    },
];
const  sumReduce = (total, number) => {
    return total + number;
};
const multipleReduce = (total, number) => total*number;
const sumByProportion = (sum, y) => (sum + y.score * y.proportion);
const maxReduce = (x,y) => Math.max(x,y);
const countDupReduce = (result,currentChar) => { 
    result[currentChar] ? result[currentChar] ++ : result[currentChar] = 1;
    return result;
};


const numReduce = numberArray.reduce( sumReduce);
const textReduce = textArray.reduce(sumReduce);
const numReduceProportion = scoresObject.reduce(sumByProportion, 0);
const numMax = numberArray.reduce(maxReduce);
const strCounted = str.split("").reduce(countDupReduce, {});
const multipleCalc = numberArray.reduce(multipleReduce, 1);

console.log("Number sum",numReduce);
console.log("Number multiple",multipleCalc);
console.log("Number proportion",numReduceProportion);
console.log("Char concat",textReduce);
console.log("String duplication count: ", strCounted);
console.log("Max number of array: ",numMax);
