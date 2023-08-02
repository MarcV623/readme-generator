function generateMarkdown(data) {
  return `# ${data.title} ![badge](https://img.shields.io/badge/LICENSE-${data.license}-red)

## Table of Contents
- [Description](#description)
- [Installation](#installion)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description

${data.description}

## Installion

${data.installion}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}
 
## Questions

My GitHub profile is: [here](${data.username}).

If you have any question you can reach me at ${data.email}.

## License

This project is licensed under the ${data.license} license.

`
}
module.exports = generateMarkdown;
