function getArrayParams(...arr) {
    if (arr.length === 0) {
        return {min: 0, max: 0, avg: 0};
    }

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((acc, val) => acc + val, 0);
    let avg = Number((sum / arr.length).toFixed(2));

    return {min, max, avg};
}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let countEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
            countEven++;
        }
    }
    if (countEven === 0) return 0;
    return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
    if (arrOfArr.length === 0) return 0;
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
