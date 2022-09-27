//Continuation of main
//convert input to number ---> let num = +answer ---> add + to it

function whiles() {
  let i = 10;
  while (i < 21) {
    console.log(Math.random());
    i++;
  }
}

function loops1() {
  // let i = 35;
  // while (i > -22) {
  //   console.log(i);
  //   i -= 18;
  // }

  let words =
    "i chose to come here so please let me pass or this will turn very ugly for both of you";
  let output = "";
  let charIndex = 0;
  while (output.length < 15) {
    output += words[charIndex];
    charIndex += 3;
    console.log(output);
  }
}

function loops2() {
  // sum = 0
  // for (let i = 0; i < 21; i+=2){
  //     sum += i
  //     console.log(sum)
  // }
  let i = 0;
  let sums = 0;
  while (i < 21) {
    sums += i;
    console.log(`number is ${i} and sum is ${sums}`);
    i += 2;
  }
}

function loops3() {
  for (let i = 0; i < 5; i++) {
    // let stairs = '_'
    for (let j = 0; j < 5; j++) {
      // console.log(stairs)
      // stairs += '_'
      // or even:
      console.log("_".repeat(j));
    }
    for (let j = 5; -1 < j; j--) {
      console.log("_".repeat(j));
    }
  }
  //   let i = 0;
  //   let sums = 0;
  //   while (i < 21) {
  //     sums += i;
  //     console.log(`number is ${i} and sum is ${sums}`);
  //     i += 2;
  //   }
}

function factorials() {
  const readline = require(`readline`);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Number to get Factorial:", (answer) => {
    num = +answer;
    let fact = 1;
    let str = "";

    for (let i = num; i >= 1; i--) {
      fact *= i;
      str += `${i}`;
      if (i > 1) {
        str += " * ";
      }
    }
    console.log(`factorial of ${num} which is ${str} is ${fact}`);
    rl.close();
  });
}

function loops4() {
  const words =
    "i chose to come here so please let me pass or this will turn very ugly for both of you";
  let output = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") continue;
    output += words[i];
    if (output.length === 24) break;
}
console.log(output);
}

console.log(loops4());
