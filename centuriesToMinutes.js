function centuriesToMinutes(c) {
    let years = c * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = hours * 60;

    console.log(`${c} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1)