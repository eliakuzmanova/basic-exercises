function amazingNumbers(num) {
    let numAsString = String(num);
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    let total = sum.toString().includes("9");
    console.log(total ? 
       `${num} Amazing? True`:
       `${num} Amazing? False` );
}
amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(982)