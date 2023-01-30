function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        i = String(i);
        let isSpecial = false;
        for (let x = 0; x < i.length; x++) {
            sum += Number(i[x]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            isSpecial = true;
        }
        if (isSpecial) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }


}
specialNumbers(15);