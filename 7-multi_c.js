const x = Number(process.argv[2]);

if (!Number.isInteger(x)) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    let output = "";
    while (i < x) {
        output += "C is fun\n";
        i++;
    }
    console.log(output.trim());
}