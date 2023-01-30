function spices(yield) {
    let days = 0;
    let total = 0;

    while (yield >= 100) {
        total += yield;
        yield -= 10;
        days++
        total -= 26;
    }
    if (days <= 0) {
        console.log(`${days}\n${total}`);
    } else {
        console.log(`${days}\n${total - 26}`);
    }
}
spices(450)