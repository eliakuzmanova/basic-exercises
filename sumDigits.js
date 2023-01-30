function sumDigits(n) {
    let sum = 0;
    n = n.toString();
    for(let i = 0; i < n.length;i++) {
        let y = Number(n[i]);
        sum += y;
    }
    console.log(sum);

}
sumDigits(245678)