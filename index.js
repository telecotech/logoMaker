const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapecolor',
    message: 'Enter the shape color (keyword or hex):',
  },
];

function generateSvg(answers) {
  const { text, textColor, shape, shapeColor } = answers;
  
  // Create the SVG string template
  const svgString = `
    <svg width="100" height="100">
      <rect width="100" height="100" fill="${shapeColor}" />
      <text x="50" y="50" fill="${textColor}" text-anchor="middle" font-size="40">${text}</text>
    </svg>
  `;
  
  return svgString;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote ${fileName}!`);
    }
  });
}

function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const svgString = generateSvg(answers);
      writeToFile('logo.svg', svgString);
    })
    .catch(error => {
      console.error(error);
    });
}

init();
