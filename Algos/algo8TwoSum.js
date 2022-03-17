function twoSums(arr, target) {
    const returnArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= target) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === target - arr[i]) {
                    returnArr.push(i)
                    returnArr.push(j)
                    return returnArr
                }
            }
        }
    }
    return returnArr
}

function twoSumsHash(arr, target) {
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= target) {
            if (!hash.hasOwnProperty(arr[i])){
                hash[arr[i]] = i
            }
            if (hash.hasOwnProperty(target - arr[i]) && hash[target - arr[i]] !== i) {
                return [hash[target - arr[i]], i]
            }
        }
    }
}

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]