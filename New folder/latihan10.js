var x = [1,2,3,2,5,2,7,2];

const bubbleSort = (array) => {
    for (let i = array.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
const getMean = (arr) => {
    var sum = 0;
    for(var index in arr)
    {
        sum += arr[index];
    }

    return sum/arr.length;
}
const getMedian = (arr) => {
    bubbleSort(arr);
    if(arr.length % 2 != 0)
    {
        return arr[Math.floor(arr.length/2)];
    }
    else {
        return (arr[arr.length/2-1] + arr[arr.length/2])/2;
    }
}
const getModes = (arr) => {
    var countObj = {};
    for(var index in arr)
    {
        if(countObj[arr[index]] == undefined)
        {
            countObj[arr[index]] = 1;
        }
        else {
            countObj[arr[index]]++;
        }
    }
    var modes = [];
    var maxCount = 0;
    var count = 0;
    for(var prop in countObj)
    {
        if(countObj[prop] > maxCount){
            modes = [prop];
            maxCount = countObj[prop];
        }
        else if (countObj[prop] == maxCount){
            modes.push(prop);
        }
        count++;
    }
    if(modes.length == count)
    {
        modes = [];
    }
    return modes;
}

console.log(getMean(x));
console.log(getMedian(x));
console.log(getModes(x));


