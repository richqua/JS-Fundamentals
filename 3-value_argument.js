const arg = process.argv[2];

switch (arg) {
    case undefined:
        console.log("No argument");
        break;
    default:
        console.log(arg);
}