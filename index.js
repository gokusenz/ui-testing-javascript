
const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless({debug: true, scrollBeforeClick: true, implicitWait: true})
  await chromeless.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36')

  await searchJob(chromeless)


  const url = await chromeless.evaluate(url => window.location.href)
  console.log(url)

  await chromeless.end()
}

const searchJob = (chromeless) => {
  chromeless
  .goto('http://www.jobthai.com/')
  .wait('a[href="http://www.jobthai.com/home/searchjob.php"]')
  .click('a[href="http://www.jobthai.com/home/searchjob.php"]')  
  .wait('input[name="KeyWord"]')
  .type('โปรแกรมเมอร์', 'input[name="KeyWord"]')
  .click('input[id="buttonsearch"]')
  .wait(5000)
}

run().catch(console.error.bind(console))