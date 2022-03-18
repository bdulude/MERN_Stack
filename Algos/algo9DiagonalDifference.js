/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3], // arr[0][0],    arr[0][arr.length - 1]
    [4, 5, 6], // arr[1][1],    arr[1][1]
    [9, 8, 9], // arr[2][2],    arr[2][0]
];
const expected1 = 2;

/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/



function diagonalDifference(sqrMatrix) {
    let leftDiagSum = 0;
    let rightDiagSum = 0;
    let leftDiagX = 0;
    let rightDiagX = sqrMatrix[0].length - 1;
    let leftDiagY = 0;
    let rightDiagY = sqrMatrix[sqrMatrix.length - 1][0];
    while (leftDiagX < sqrMatrix.length) {
        leftDiagSum += sqrMatrix[leftDiagX, leftDiagY];
        rightDiagSum += sqrMatrix[rightDiagX, rightDiagY];
        console.log(leftDiagX, leftDiagY);
        console.log(rightDiagX, rightDiagY);
        leftDiagX++;
        leftDiagY++;
        rightDiagX--;
        rightDiagY--;
    }
    return Math.abs(leftDiagSum - rightDiagSum);
}

console.log(diagonalDifference(squareMatrix1));