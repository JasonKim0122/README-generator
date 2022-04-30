// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/license/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    This application is under the following license:
    
    ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.projectTitle}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [About-Me](#About-Me)
  * [Contact-Me](#Contact-Me)

  ## [Description]
  ${data.description}

  ## [Installation]
  ${data.install}

  ## [Usage]
  ${data.use}

  ## [Contributors]
  ${data.includeContributors}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## [About-Me]
  ${data.aboutMe}

  ## [Contact-Me]

  If you have any questions and would like to contact me please reach out to me at the links below:

  [GitHub](${data.gitHubLink})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
