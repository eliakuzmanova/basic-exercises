function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let steps = 1;


    for(let i = base; i >= 1; i-= 2) {
      if (i > 2) {
        if (steps % 5 === 0) {
            lazuli += i * 4 - 4;
        } else {
            marble+= i * 4 - 4;
        }
        stone += Math.pow(i - 2, 2);
        steps++;
        } else {
            gold += Math.pow(i, i);
        }
    }
    steps *= increment;
    stone *= increment;
    gold *= increment;
    marble *= increment;
    lazuli *= increment;
    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lazuli)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor
    (steps)}` );
}
pyramid(12,1)