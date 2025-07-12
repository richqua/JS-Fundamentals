const arg = process.argv[2];

if (arg === undefined || !Number.isInteger(Number(arg))) {
    console.log("Missing number of occurrences");
} else {
    const x = Number(arg);
    let i = 0;
    let output = "";
    while (i < x) {
        output += "C is fun\n";
        i++;
    }
    console.log(output.trim());
}