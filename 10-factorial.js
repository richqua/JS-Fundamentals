const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

const result = factorial(num);
console.log(result);

function factorial(n) {
    if (isNaN(n) || n <= 1) {
    return 1;
    }
  return n * factorial(n - 1);
}