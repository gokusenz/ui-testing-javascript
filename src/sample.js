const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless({debug: true, scrollBeforeClick: true, implicitWait: true})
  await chromeless.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36')

  const url = await chromeless.evaluate(url => window.location.href)
  console.log(url)

  // await chromeless.end()
}

run().catch(console.error.bind(console))