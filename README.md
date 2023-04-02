# logoMaker

## Installation
To install Logo Maker, clone this repository and run npm install to install the required dependencies:

git clone https://github.com/telecotech/logo-maker.git
cd logo-maker
npm install

## Usage

To use Logo Maker, simply run the command node index.js in the terminal. You will be prompted to enter the following information:

Text: Enter up to three characters to use as the logo text.
Text Color: Enter the text color in keyword or hex format (e.g. red or #FF0000).
Shape: Choose a shape for the logo from the list of available options.
Shape Color: Enter the shape color in keyword or hex format.
After entering this information, Logo Maker will generate an SVG file with your logo and save it to a file named logo.svg in the current directory.

## Examples

Here are some example logos generated using Logo Maker:

$ node index.js

? Enter up to three characters: ABC
? Enter the text color (keyword or hex): blue
? Choose a shape: triangle
? Enter the shape color (keyword or hex): yellow

Logo generated successfully! See logo.svg for the result.

$ node index.js

? Enter up to three characters: XYZ
? Enter the text color (keyword or hex): #00FF00
? Choose a shape: square
? Enter the shape color (keyword or hex): black

Logo generated successfully! See logo.svg for the result.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments

Logo Maker was inspired by svg-term-cli and the Noun Project.
