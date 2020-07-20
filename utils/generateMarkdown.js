function generateMarkdown(data) {
    return `
  # **${data.title}**
   
  ## Description 
  
  ${data.description}
  
  ## Table of contents
  
  ## Installation
  
          ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Licence
  
  ${data.licence}
  
  ## Contributors
  
  ${data.contributing}
  
  ## Test
  
  ${data.test}
  
  
  ## Repository
  
  - [Project Repo](${data.repo})
  
  ## GitHub

  - [GitHub Profile](${data.username})
  
  `;
}

module.exports = generateMarkdown;