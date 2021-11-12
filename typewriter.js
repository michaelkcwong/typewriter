//Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone, as shown in the GIF above.

const sentence = "hello there from lighthouse labs";
let time = 0;

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char)
}, time)
time = time + 50;
};
setTimeout(() => {
  process.stdout.write("\n")
}, time);