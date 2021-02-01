module.exports = {
    tags: ['google'],
    'test on Google' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'Facebook') 
        .click('button[name=btnK]')  
        .click('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.tfB0Bf > center > input.gNO89b')
        .pause(3000)
        .end()
    }
  }