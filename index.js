const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, motivation, projectLink, installation, usage, credits, license, badges, tests, github, linkedIn, email}) => 

`# ${title}   [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)


## Description

    ${motivation}

    ${projectLink}


## Table of Contents (Optional)



- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributers](#contributors)
- [Tests] (#tests)
- [Contact!](#Contact)

## Installation

To install my project you will need the following programs! 

 ${installation}

## Usage

 ${usage}

## Credits

I'd like to give note to the following resources that helped me complete this project : 

 ${credits}

## License

 ${license}

## Badges

 ${badges}


## Contact

If you have any questions reguarding this project, a separate one, or just want to chat :

Github : ${github}
LinkedIn : ${linkedIn}
Email : ${email}

## Tests

 ${tests}
`
 ;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
      },
    {
      type: 'input',
      name: 'motivation',
      message: 'Describe your project! Motivation? Problems solved? What did you learn?',
    },
    {
      type: 'input',
      name: 'projectLink',
      message: 'Add link to deployed project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Are any installations required for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Instructions on use and photos/video tutorials',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Is there any person or third party source you would like to give credit to?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Choose license for project.',
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Enter any badges used.',
      },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedIn',
        message: 'Enter your LinkedIn URL.',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Any tests to verify your code?',
      },
  ])
  .then((answers) => {
    const PageContent = generateREADME(answers);

    fs.writeFile('README.md', PageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });