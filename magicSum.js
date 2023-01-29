function magicSum(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        for (let x = i + 1; x < arr.length; x++) {
            let second = arr[x];
            let total = first + second;
            if (sum === total) {
                console.log(first + " " + second);
            }
        }
    }
}

//magicSum([1, 7, 6, 2, 19, 23],
    // 8
    // );
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    );
// magicSum([1, 2, 3, 4, 5, 6],
//     6
//     );