const arg = process.argv[2];

if (!isNaN(arg) && Number.isInteger(Number(arg))) {
    console.log(`My number: ${Number(arg)}`);
} else {
    console.log("Not a number");
}