const inquirer = require('inquirer');
const SvgBuilder = require('svg-builder');
const fs = require('fs');


inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color:'
  }
]).then(answers => {
 const svg = new SvgBuilder();

svg.setWidth(300);
svg.setHeight(200);

// Add shape to the SVG
switch (answers.shape) {
  case 'circle':
    svg.addCircle(150, 100, 50);
    break;
  case 'triangle':
    svg.addPolygon([[150, 50], [250, 150], [50, 150]]);
    break;
  case 'square':
    svg.addRect(100, 50, 100, 100);
    break;
}

// Add text to the SVG
svg.addText(answers.text, 150, 100, {
  fill: answers.textColor,
  'text-anchor': 'middle',
  'alignment-baseline': 'central'
});

// Add color to the shape
svg.setColor(answers.shapeColor);

// Save the SVG to a file
fs.writeFileSync('logo.svg', svg.toString());

// Output message to the command line
console.log('Generated logo.svg');

});



