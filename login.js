function login(input) {
let name = input[0];
let counter = 0;
for (let i = 1; i < input.length;i++) {
    let pass = input[i];
    pass = pass.split("").reverse().join("");
    counter++
    if (counter >= 4) {
        console.log(`User ${name} blocked!`);
        break;
    }
    if (name === pass) {
        console.log(`User ${name} logged in.`);
    } else {
        console.log(`Incorrect password. Try again.`);
    }
}
}
login(['sunny','rainy','cloudy','sunny','not sunny']);