const commandLineInput = process.argv;

const timer1 = (commandLineInput) => {
  for (let i = 2; i < process.argv.length; i++) {
    if ((process.argv[i]) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, commandLineInput[i] * 100)} 
  }

};

console.log(timer1(commandLineInput));
