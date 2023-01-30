function triangleOfNumbers(n) {

    for(let i = 1; i <= n; i++) {
        let line = "";
        for(let y = 1; y <= n; y++) {
            if (y <= i) {
                line += i + " ";
            }
        }

        console.log(line);
    }

}
triangleOfNumbers(3);