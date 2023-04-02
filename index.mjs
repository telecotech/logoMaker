import inquirer from 'inquirer';
import chalk from 'chalk';
import { JSDOM } from 'jsdom';
import { SvgBuilder } from 'svg-builder';

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
  const { window } = new JSDOM();
  const svg = SvgBuilder(window.document.createElement('div'));

  const selectedShapeMethod = shapeMethods[answers.shape];

  if (selectedShapeMethod) {
    selectedShapeMethod(svg)
      .attr('fill', answers.shapeColor)
      .attr('stroke', 'none');
  }

  svg.text(50, 130, answers.text)
    .attr('font-size', '60')
    .attr('fill', answers.textColor)
    .attr('text-anchor', 'middle');

  const svgString = svg.svg();
  const filename = 'logo.svg';
  fs.writeFileSync(filename, svgString);
  console.log(chalk.green(`Generated ${filename}`));
});
