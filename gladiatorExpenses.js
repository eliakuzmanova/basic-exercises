function expenses(fights, helmet, sword, shield, armor) {
    
    let total = 0

    for (let lost = 1; lost <= fights; lost++) {
        if (lost % 2 === 0) {
            total += helmet;
        }
        if (lost % 3 === 0) {
            total += sword;
        }
        if (lost % 6 === 0) {
            total += shield;
        }
        if (lost % 12 === 0) {
            total += armor
        }
    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

}
expenses(7,
    2,
    3,
    4,
    5
    );