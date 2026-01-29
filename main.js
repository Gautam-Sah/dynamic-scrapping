import puppeteer from "puppeteer"
const browser = await puppeteer.launch({
  headless: false,
  //   ignoreHTTPSErrors: true,
  //   args: ["--ignore-certificate-errors"],
})

const page = await browser.newPage()
// await page.goto("https://student.bmsit.ac.in/parents/index.php")
await page.goto("https://www.youtube.com")
