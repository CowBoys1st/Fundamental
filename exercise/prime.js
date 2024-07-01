// let num = 17;
// let divider = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) divider++;
// }

// console.log(
//   divider == 2 ? `${num} is a prime number` : `${num} is not a prime number`
// );


for (let i = 1; i <= 10; i++) {
    let divider = 0
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) divider++
    }
    console.log(
        divider == 2 ? `${i} is a prime number` : `${i} is not a prime number`
    );
}