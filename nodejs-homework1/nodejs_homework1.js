
const arguments = process.argv.slice(2);

const alan = (r) => {
    let pi = 3.14;
    let alan = Math.PI * r**2;
    console.log(`Yaricapi ${r} olan dairenin alanı = ${alan}`);
}
alan(arguments[0]*1);