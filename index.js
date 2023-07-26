const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'input', 
        message: 'What is your favorite hamburger place?',
        name: 'fav_hamburger' // fav = favorite
    },
    {
        type: 'input', 
        message: 'What is your favorite soda?',
        name: 'soda'
    }
]).then((answers) => {
    console.log(answers)
})
