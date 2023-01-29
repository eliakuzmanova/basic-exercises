function multiplicationTable(n) {
    for(let i = 1; i <= 10; i++) {
    let sum = i * n;
    console.log(`${n} X ${i} = ${sum}`);
    }
}
multiplicationTable(5);