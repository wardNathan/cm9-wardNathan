// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'None'){
    return '';
  }   
  else if (license == 'Apache') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } 
  else if (license == 'BSD3') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } 
  else if (license == 'BSD2') {
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    }  
  else if (license == 'Creative Commons Attribution 4.0 International') {
      return '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
    } 
  else if (license == 'Eclipse') {
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    }    
  else if (license == 'IBM') {
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    }
  else if (license == 'MIT'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }  
  else if (license == 'Mozilla') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }  
  else if (license == 'Open Data Commons Attribution License (BY)') {
      return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
    }  
  else if (license == 'Open Data Commons Open Database License (ODbL)') {
      return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
    }  
  else if (license == 'Open Data Commons Public Domain Dedication and License (PDDL)') {
      return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';
    }  
  else if (license == 'Perl The Perl License') {
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    }  
  else if (license == 'Perl The Artistic License 2.0') {
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    }  
  else if (license == 'Zlib') {
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    }  
  }
  ;
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `

    # ${data.projectName}

    ## License
    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
    - [License](#License)
    - [Description](#Description)
    - [Installation](#installation)
    - [Usage](#Usage)
    - [Credits](#credits)
    - [Tests](#Tests)
    - [Questions](#Questions)
    
    ## Installation
    ${data.installation}

    ## Usage
    ![alttext](./assets/images/{add name of picture here})
    ${data.usage}
    
    ## Credits
    ${data.credits}

    ## Tests
    ${data.tests}
    
    ## Questions
    If you would like to ask me any questions. Contact me at my email address below or you can check out my Github profile.
    - Email-${data.email}
    - Github user name- ${data.githubUsername}
    
    
  `;
  }
  
  module.exports = generateMarkdown;