function rounding(n, y) {

    if (y >= 15) {
        y = 15;
    }
    let x = n.toFixed(y)
    console.log(parseFloat(x));
}
rounding(3.1415926535897932384626433832795,2);