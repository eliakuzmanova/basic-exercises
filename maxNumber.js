function maxNumber(arr) {
    let newArr = [];

    for (let i = 0; i <= arr.length; i++) {
        let max = 0;
        if (arr[i] > arr[i + 1]) {
            max += arr[i]
            newArr.push(max);
            for (let n = 0; n < newArr.length; n++) {
                if (max > newArr[n]) {
                    newArr = [];
                    newArr.push[max]
                }
            }
        } else if ( i == arr.length - 1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(" "));

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);