function vacation(people, type, day) {

let price = 0;
if (people >= 100 && type === "Business") {
    people -= 10;
}
switch (type) {
    case "Students":
        switch (day) {
            case "Friday":
                price += 8.45;
                break;
            case "Saturday":
                price += 9.80;
                break;
            case "Sunday":
                price += 10.46;
                break;
        }
        price *= people;
        if (people >= 30) {
            price *= 0.85;
        }
    break;
    case "Business":
        switch (day) {
            case "Friday":
                price += 10.90;
                break;
            case "Saturday":
                price += 15.60;
                break;
            case "Sunday":
                price += 16;
                break;
        }
        price *= people;
        break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price += 15;
                    break;
                case "Saturday":
                    price += 20;
                    break;
                case "Sunday":
                    price += 22.50;
                    break;
            }
            price *= people;
            if (people >= 10 && people <= 20) {
                price *= 0.95
            }

        break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
    )