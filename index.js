const commander = require('commander');

commander
  .option('-n, --nicknames <values>', 'Nicknames', nicknames => console.log('nick names:', nicknames.split(',')))
  .option('-f, --first-name <value>', 'First Name', 'John')
  .parse(process.argv);

const { firstName } = commander;

console.log('first name:', firstName);
