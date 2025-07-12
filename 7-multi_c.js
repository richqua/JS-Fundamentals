const arg = process.argv[2];
const parsed = Number(arg);

if (arg === undefined || !Number.isFinite(parsed) || !Number.isInteger(parsed)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < parsed; i++) {
        console.log("C is fun");
    }
}