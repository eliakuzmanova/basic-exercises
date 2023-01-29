function murgesArr(arr, r) {
    for (let i = 0; i < r; i++) {

        let s = arr.shift();
        arr.push(s)
    }
    console.log(arr.join());
}
arrRotation([51, 47, 32, 61, 21], 2);