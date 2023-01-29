function printAndSum(n, y) {
let sum = 0;
let line = "";
 
    for(let i = n; i <= y; i++) {
        sum += i;
        line += i + " ";
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);