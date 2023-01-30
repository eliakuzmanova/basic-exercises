function triples(n) {

    for (let i = 0; i < n; i++) {
        let letter = String.fromCharCode(97 + i);
        for (let y = 0; y < n; y++) {
            let lett = String.fromCharCode(97 + y);

            for (let x = 0; x < n; x++) {
                let le = String.fromCharCode(97 + x);

                console.log(`${letter}${lett}${le}`);
            }
        }
    }
}
triples(3);