const signs = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\n"];
let time = 100;
for (let sign of signs) {
  time = time + 200;
  setTimeout(() => {
    process.stdout.write(sign);
  },time);
}


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r|   \n');

// },900);