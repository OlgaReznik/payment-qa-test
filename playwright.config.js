// playwright.config.js
module.exports = {
    use: {
      baseURL: 'http://paytest.dev:5000', 
      browserName: 'chromium',          
      headless: true                     
    },
    reporter: [['html', { open: 'never' }]],
    testDir: './tests',                 
    timeout: 30000,  
    retries: 2                    
  };
  