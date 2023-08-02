// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![badge](https://img.shields.io/badge/LICENSE-${data.license}-red)

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
