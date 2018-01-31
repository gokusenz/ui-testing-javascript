const { Chromeless } = require('chromeless')
const { expect } = require('chai')

// make sure you do npm i chai
// to run this example just run
// mocha path/to/this/file


describe('Searchjob', function () {
  it('search job โปรแกรมเมอร์', async function () {
    this.timeout(10000); //we need to increase the timeout or else mocha will exit with an error
    const chromeless = new Chromeless({debug: true, scrollBeforeClick: true, implicitWait: true})
    await chromeless.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36')
    await chromeless.goto('http://www.jobthai.com/')
    .wait('a[href="http://www.jobthai.com/home/searchjob.php"]')
    .click('a[href="http://www.jobthai.com/home/searchjob.php"]')  
    .wait('input[name="KeyWord"]')
    .type('โปรแกรมเมอร์', 'input[name="KeyWord"]')
    .click('input[id="buttonsearch"]')
    .wait(5000)


    const url = await chromeless.evaluate(url => window.location.href)

    console.log(url)

    expect(url).to.match(/^https\:\/\/www\.jobthai.com\/home\/job_list.php?Type=NormalSearch&l=th&Region=All&ProvinceIIE=All&JobType=All&SubJobType=&IIECode=All&KeyWord=%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C/)
    // await chromeless.end()
  })
})