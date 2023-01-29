function equalSums(num) {

    let isEqual = false;

    for (let i = 0; i < num.length; i++) {
        let rightNum = 0;

        let leftNum = 0;

        for (let y = i - 1; y >= 0; y--) {
            rightNum += Number(num[y]);


        }

        for (let x = i + 1; x < num.length; x++) {
            leftNum += Number(num[x]);
        }
        if (rightNum == leftNum) {
            isEqual = true;
            console.log(i);
        }
    }
    if(!isEqual) {
        console.log("no");
    }
}
 equalSums([1, 2, 3, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
//equalSums([1, 2, 3]);
// equalSums([1]);