const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  let answers = [];
  console.log(`> Hello ${answer}! :)`);
  answers.push(`${answer}`);
  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`> Oh, so you like doing ${answer}? That's very interesting`);
    answers.push(`${answer}`);
    rl.question(`What do you listen to while doing ${answer}? `, (answer) => {
      console.log(`> ${answer}? How fitting, hahaha`);
      answers.push(`${answer}`);
      rl.question("What about favorite meal of the day? Which one's your favorite? ", (answer) => {
        console.log(`> ${answer}, huh?`);
        answers.push(`${answer}`);
        rl.question(`What do you like eat to at ${answer}? `, (answer) => {
          console.log(`> ${answer}? That does sound delicious...`);
          answers.push(`${answer}`);
          rl.close();
          console.log('--------------------------------------')
          console.log(`> My name is ${answers[0]}, I love to do ${answers[1]}. I listen to ${answers[2]} while doing ${answers[1]}. My favorite meal of the day is ${answers[3]} and my favorite food is ${answers[4]}.`)
        });
      });
    });
  });
});

