function mining(input) {
    let allMoney = 0;
    let bitcoins = 0;
    let days = 0;
    let priceB = 11949.16;
    let firstB = 0;

    for (let i = 0; i < input.length; i++) {
        let gold = Number(input[i]);
        days++;
        if (days % 3 === 0) {
            gold *= 0.70
        }
        let leva = gold * 67.51;
        allMoney += leva;
        while (allMoney > priceB) {
            bitcoins++;
            allMoney -= priceB;
            if (bitcoins == 1) {
                firstB = days;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstB}`);
    }
    console.log(`Left money: ${allMoney.toFixed(2)} lv.`);
}
mining([3124.15, 504.212, 2511.124])