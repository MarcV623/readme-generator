const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'input', 
        message: 'What is your project title?',
        name: 'title' 
    },
    {
        type: 'input', 
        message: 'What does your project do?',
        name: 'description'
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input', 
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'list', 
        message: 'What license for your application will be used?',
        name: 'license',
        choices: [
            'MIT',
            'ISC',
            'ABC'
        ]
    },
    {
        type: 'input', 
        message: 'How is your project installed?',
        name: 'installion'
    },
    {
        type: 'input', 
        message: 'How do you start your application?',
        name: 'usage'
    },
    {
        type: 'input', 
        message: 'How do you start your application?',
        name: 'usage'
    },
    {
        type: 'input', 
        message: 'What are your contribion guidelines?',
        name: 'guidelines'
    },
    {
        type: 'input', 
        message: 'what are your test instructions?',
        name: 'instructions'
    }
]).then((answers) => {
    console.log(answers)
})
