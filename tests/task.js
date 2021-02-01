module.exports = {
    tags: ['hallo'],
    'test of hallomarta.de': function (browser) {
      browser
        .url('https://www.hallomarta.de/')
        .waitForElementVisible('body')
        .assert.titleContains('marta')
        .pause(2000)
    },

    'About hallomarta.de': function (browser) {
      browser
        .url('https://www.hallomarta.de/%C3%BCber-uns')
        .waitForElementVisible('body')
        .pause(2000)
    },   

    'service of hallomarta.de': function (browser) {
      browser
        .url('https://www.hallomarta.de/leistungen')
        .waitForElementVisible('body')
        .pause(2000)
    },   

    'caregivers of hallomarta.de': function (browser) {
      browser
        .url('https://www.hallomarta.de/betreuungskr%C3%A4fte')
        .waitForElementVisible('body')
        .pause(2000)
    },  
    
    'contact form of hallomarta.de': function (browser) {
      browser
        .url('https://www.hallomarta.de/anfrageformular')
        .waitForElementVisible('body')
        .pause(2000)
        .end();
    },   
  };
