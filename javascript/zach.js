// JAVASCRIPT START
//NB: semicolons not must but recommended for better readable code
/* DATA TYPES
undefined, null, boolean, string, symbol, number and object
*/

// DATA TYPES DECLARATIONS
function dataTypes() {
  var MyName = "Beau"; //can be used throughout program
  MyName = 8;
  let OurName = "Free Code Camp"; //will be used within the scope of where you declared that
  const pi = 3.142; //variable that cannot be changed later
  MyName++; // or MyName = MyName + 1
  MyName--;
  MyName = 11 % 3; //gives remainder of division
  MyName += 12; //MyName = MyName + 12
  MyName -= 12; //MyName = MyName - 12
  MyName *= 12; //MyName = MyName * 12
  MyName /= 12; //MyName = MyName / 12

  var myStr = 'I am a "double quoted string" inside another "double quotes';
  var myStr = 'I am a "double quoted string" inside another "double quotes"';
  var myStr = `'I am a "double quoted string" inside another "double quotes"'`;

  /* ESCAPING CHARACTERS
\' single quote
\" double quotes
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

  var myStr2 = "firstline\n\t\\secondline\nthirdline";

  lL = myStr.length;
  iI = myStr[1];
}

//ARRAYS
function arrayS() {
  var myArray = ["John", 54];
  var myArray2 = [
    ["John", 50, true],
    ["Jane", 40],
  ];
  myArray3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  myArray[1] = "a";
  myData = myArray3[2][1];
  myArray.push(["Happy", "ok"]);
  /* others .pop() ->removes the last item
.shift() -> removes first element
.unshift('add sth') ->adds to beginning of array
*/
  console.log(myArray);
}

//IF
function ifTrue(num) {
  if (num != 12 || num == 20) {
    return "it is what it is";
  } else if (num > 12 && num < 50) {
    return "yes it is";
  } else {
    return "no it is not";
  }
}
/*
3 == 3 return true
3 == '3' return true because == converts both to be equal first
3 === 3 return true
3 === '3' return false because === is strict equality sign
!== strict inequality operator
|| or
&& and
*/

function golfScore(par, strokes) {
  var names = [
    "hole-in-one",
    "eagle",
    "birdie",
    "par",
    "bogey",
    "double bogey",
    "go home",
  ];
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

function sWitch(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "alpha";
      break;
    case 4:
    case 5:
    case 6:
      answer = "beta";
      break;
    case 7:
    case 8:
    case 9:
      answer = "gamma";
      break;
    case 10:
    case 11:
    case 12:
      answer = "delta";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

function inputs() {
  const readline = require(`readline`);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("color:", (answer) => {
    console.log(`i love color ${answer}`);
    console.log(`type is ${typeof answer}`);
    rl.close();
  });
}

function ifs() {
  let age = 15;
  if (age >= 1 && age <= 3) {
    console.log("toddler");
  } else if (age >= 4 && age <= 12) {
    console.log("child");
  } else {
    console.log("stop");
  }
}

function inputs1() {
  const readline = require(`readline`);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("number :", (answer) => {
    const ans = +answer; //convert to number
    if (ans % 2 === 0) {
      console.log(`total =  ${ans + 55}`);
    } else {
      console.log(`total =  ${ans + 100}`);
    }
    //another way to do it
    const check = ans % 2 === 0;
    const sum = ans + (check ? 55 : 100);
    console.log(`total is = ${sum}`);
    console.log(`type is ${typeof ans}`);
    rl.close();
  });
}

function inputs2() {
  const readline = require(`readline`);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("guess a sentence:", (answer) => {
    //start user with 0 points
    let points = 0;
    if (answer[0] === "?") {
      points += 5
      if (answer[1] === "!") {
        points += 6;
      } else if (answer[1] === "%") {
        points += 7;
        points += answer.length;
      } else {
        points += 1;
      }
    }
    console.log(`GAME OVER! you have : ${points} points`);
    rl.close();
  });
}

function inputs3() {
  const readline = require(`readline`);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("guess a fish:", (answer) => {
    //start user with no prize
    let prize = 'nothing';
    ans = answer.toLowerCase()
    const superSpecialFish = 'whale hammer head '
    const specialFishes = `swordfish octopus squid shark ${superSpecialFish}` // can also use array and for loop
    if (specialFishes.includes(ans)) {
      prize = 'silver'
      if (superSpecialFish.includes(ans)) {
        prize += ' and gold'
      }
    }
    console.log(`GAME OVER! you get : ${prize}`);
    rl.close();
  });
}

function forloops() {
  for (let i = 1; i <= 10; i += 1) {
    if (i >= 3 && i <= 8) {
      continue
    }
    console.log(i)
  }
}

function forloops1() {
  let str = 'howdy neighbor'
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ') {
      break   // continue  ---> will not print out the space
    }
    console.log(str[i]);
  }
  console.log('done');
}

function forloops2() {
  const str = "how";
  for (let i = 0; i <= str.length; i++) {
    for (let j = 1; j <= 2; j++){
      console.log(str[i], j);
    }
  }
}


console.log(forloops1());