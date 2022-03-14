// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    arr1Idx = 0;
    arr2Idx = 0;
    outputArr = [];
    let mergedArr = merge(arr1, arr2)


    console.log(mergedArr);

}

function merge(leftArr, rightArr) {
    //create an empty array that we will put our sorted elements in
    const output = [];
    //create two variables that we will use to go through the two arrays respectivley. These will be their index.
    let leftIndex = 0;
    let rightIndex = 0;
    let prevEl = null;
    // while there are still elements inside the arrays we passed into this helper function with our original function
    while (leftIndex < leftArr.length || rightIndex < rightArr.length) {
        // we are creating a variable to hold the value of the given index of the two arrays respectivly
        
        let leftEl = leftIndex < leftArr.length ? leftArr[leftIndex] : null;
        let rightEl = rightIndex < rightArr.length ? rightArr[rightIndex] : null;
        // const rightEl = rightArr[rightIndex];
        // do a comparison, whichever element is smaller of the two arrays will be put into the array that we will return.
        if (leftEl === null || rightEl === null) {
            if (leftEl === null) {
                output.push(rightEl);
                prevEl = rightEl;
            }
            if (rightEl === null) {
                output.push(leftEl);
                prevEl = leftEl;
            }
        }
        else {
            if (leftEl < rightEl) {
                if (leftEl !== prevEl) {
                    output.push(leftEl);
                    prevEl = leftEl;
                }
                leftIndex++;
            } else {
                if (rightEl !== prevEl) {
                    output.push(rightEl);
                    prevEl = rightEl;
                }
                rightIndex++;
            }
        }
    }
    //after we sort our given arrays, we return them, if there are leftover elemelts in eithier of the arrays, pass them in too
    // if (leftArr.length > leftIndex) {
    //     const remainingArr = leftArr.slice(leftIndex);
    //     for (let i = 0; i < output.length; i++) {
    //         for (let j = 0; j < remainingArr.length; j++) {
    //             if (output[i] !== remainingArr[j]) {
    //                 output.push(remainingArr[j]);
    //             }
    //         }
    //     }
    // }

    // if (rightArr.length > rightIndex) {
    //     const remainingArr = rightArr.slice(rightIndex);
    //     for (let i = 0; i < output.length; i++) {
    //         for (let j = 0; j < remainingArr.length; j++) {
    //             if (output[i] !== remainingArr[j]) {
    //                 output.push(remainingArr[j]);
    //             }
    //         }
    //     }
    // }
    return output;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a ->
//     [1, 3, 3, 5, 8, 10]
// //   <b></b>