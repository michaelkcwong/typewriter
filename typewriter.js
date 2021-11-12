//Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone, as shown in the GIF above.

const sentence = "hello there from lighthouse labs";
let time = 0;

for (const char of sentence) { //looping through each character 
  setTimeout(() => { //delay the characters
  process.stdout.write(char)
}, time)
time = time + 50; //delaying each character 50ms apart
};
setTimeout(() => {
  process.stdout.write("\n") //output a newline character before exiting, so that the next prompt starts on its own line
}, time);