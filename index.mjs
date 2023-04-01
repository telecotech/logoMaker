import inquirer from 'inquirer';
import chalk from 'chalk';
import SvgBuilder from 'SvgBuilder';
import fs from 'fs';


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

inquirer.prompt(questions).then((answers) => {
  const Svgbuilder = new SvgBuilder();
  switch (answers.shape) {
    case 'circle':
      svg.circle(100, 100, 50)
        .attr('fill', answers.shapeColor)
        .attr('stroke', 'none');
      break;
    case 'triangle':
      svg.path('M 50 0 L 100 100 L 0 100 Z')
        .attr('fill', answers.shapeColor)
        .attr('stroke', 'none');
      break;
    case 'square':
      svg.rect(50, 50, 100, 100)
        .attr('fill', answers.shapeColor)
        .attr('stroke', 'none');
      break;
  }
  svg.text(50, 130, answers.text)
    .attr('font-size', '60')
    .attr('fill', answers.textColor)
    .attr('text-anchor', 'middle');

  const svgString = svg.toString();
  const filename = 'logo.svg';
  fs.writeFileSync(filename, svgString);
  console.log(chalk.green(`Generated ${filename}`));
});
