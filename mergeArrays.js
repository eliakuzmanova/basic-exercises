function mergeArrays(arr1, arr2) {
    
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let n1 = Number(arr1[i]);
        let n2 = Number(arr2[i])
        if (i % 2 === 0) {
            let even = newArr.push(n1 + n2);
        } else {
            let odd = newArr.push((arr1[i] + arr2[i]));
        }
    }

    console.log(newArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);