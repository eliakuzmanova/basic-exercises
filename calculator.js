function calculator(one, op, two) {
    switch (op) {
        case "+":
            console.log(`${(one + two).toFixed(2)}`);
            break;
        case "-":
            console.log(`${(one - two).toFixed(2)}`);
            break;
        case "*":
            console.log(`${(one * two).toFixed(2)}`);
            break;
        case "/":
            console.log(`${(one / two).toFixed(2)}`);
            break;
    }
}
calculator(5,
    '+',
    10
)