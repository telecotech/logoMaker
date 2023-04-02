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
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hex):',
  },
];

function generateSvg(answers) {
  const { text, textColor, shape, shapeColor } = answers;

  const shapeSvgMap = {
    circle: `<circle cx="50" cy="50" r="45" fill="${shapeColor}" />`,
    triangle: `<polygon points="50,5 95,95 5,95" fill="${shapeColor}" />`,
    square: `<rect width="100" height="100" fill="${shapeColor}" />`
  };
  const shapeSvg = shapeSvgMap[shape] || shapeSvgMap.square;

  const svgString = `
    <svg width="100" height="100">
      ${shapeSvg}
      <text x="50" y="50" fill="${textColor}" text-anchor="middle" dominant-baseline="central" font-size="40">${text}</text>
    </svg>
  `;
  return svgString;
}

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File ${filename} written successfully.`);
    }
  });
}


function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const svgString = generateSvg(answers);
      if (svgString) {
        writeToFile('logo.svg', svgString);
      } else {
        console.error('Failed to generate SVG string');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

init();
            