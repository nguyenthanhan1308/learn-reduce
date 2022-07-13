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
const arr = [0,1,[2,3],[4,5,6],[7,8,[9,10]]]
const  sumReduce = (total, number) => {
    return total + number;
};
const numArrayToString = (num = []) =>{
    return num.reduce((a,b) => a.toString()+b.toString());
}
const multipleReduce = (total, number) => total*number;
const sumByProportion = (sum, y) => (sum + y.score * y.proportion);
const maxReduce = (x,y) => Math.max(x,y);
const countDupReduce = (result,currentChar) => { 
    result[currentChar] ? result[currentChar] ++ : result[currentChar] = 1;
    return result;
};
const Flat = (arr =[]) => {
    return arr.reduce((t,v) => t.concat(Array.isArray(v) ? Flat(v) : v), []);
};

const numReduce = numberArray.reduce( sumReduce);
const textReduce = textArray.reduce(sumReduce);
const numReduceProportion = scoresObject.reduce(sumByProportion, 0);
const numMax = numberArray.reduce(maxReduce);
const strCounted = str.split("").reduce(countDupReduce, {});
const multipleCalc = numberArray.reduce(multipleReduce, 1);

console.log("Number sum",numReduce);
console.log("Number join", numArrayToString(numberArray));
console.log("Number multiple",multipleCalc);
console.log("Char concat:",textReduce);
console.log("String duplication count: ", strCounted);
console.log("Max number of array: ",numMax);
console.table(Flat(arr))


function totalVotes(arr) {
    // your code here    
    return arr.reduce((a,b) => (b.voted === true ? a+1 : a),0);
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
   // your code here    
    return arr.reduce((a,b) => a + b.price,0);

}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    // your code here    
    return arr.reduce((t,v) => t.concat(Array.isArray(v) ? flatten(v): v),[]);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr = {}) {
    // your code here
    return arr.reduce((arr,b) => {
            if(b.age >= 36 )
            {
                arr["numOldPeople"] ? 
                arr["numOldPeople"] ++:
                arr["numOldPeople"] = 1;
                if(b.voted) {
                    arr["numOldVotesPeople"] ? arr["numOldVotesPeople"]++ : (arr["numOldVotesPeople"] = 1);
                }
                return arr;
            }
            if(b.age >= 26) {
                arr["numMidsPeople"] ? 
                arr["numMidsPeople"] ++:
                arr["numMidsPeople"] = 1;
                if (b.voted) {
                    arr["numMidsVotesPeople"] ? 
                    arr["numMidsVotesPeople"] ++:
                    arr["numMidsVotesPeople"] = 1;                    
                }
                return arr;
            }
            if(b.age >= 18) {
                arr["numYoungsPeople"] ? 
                arr["numYoungsPeople"] ++:
                arr["numYoungsPeople"] = 1;
                if (b.voted) {
                    arr["numYoungsVotesPeople"] ? 
                    arr["numYoungsVotesPeople"] ++:
                    arr["numYoungsVotesPeople"] = 1;
                }
                return arr;
            }
        },{}
    )
}

console.table(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/