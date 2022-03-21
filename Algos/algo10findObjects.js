// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/*
    create a function that takes in an object with keys/values to search for
    loop through items using a for of loop to find the object that matches the desired values
        use a key in for loop to get the values in the search object
        check the values against the current items object
        add to output if they match
    return output
*/


function findObjects(searchObj, items) {
    const output = [];
    for (obj of items) {
        let flag = false;
        for (key in searchObj) {
            if (obj[key] !== searchObj[key]) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            output.push(obj);
        }
    }
    return output;
}


function findObjectsFilter(searchObj, items) {
    const output = items.filter(obj => {
        for (key in searchObj) {
            if (obj[key] !== searchObj[key]) {
                return false;
            }
        }
        return true;
    });
    return output;
}

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));