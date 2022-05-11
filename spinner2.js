const signs = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\n"];
let time = 100;
for (let sign of signs) {
  time = time + 200;
  setTimeout(() => {
    process.stdout.write(sign);
  },time);
}


