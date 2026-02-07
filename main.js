import puppeteer from "puppeteer"
const browser = await puppeteer.launch({
  // args: ["--screen-info={1600x1200}"],
  headless: false,
  // defaultViewport: {
  //   width: 1920,
  //   height: 1080,
  // },
  defaultViewport: null,
  // headless: false,
  // defaultViewport: null,
  // args: ["--window-size=1920,1080"],
  args: ["--start-maximized"],
  sloMo: 250,

  // devtools: true,
  //   ignoreHTTPSErrors: true,
  //   args: ["--ignore-certificate-errors"],
})

const page = await browser.newPage()
// await page.setViewport({
//   width: 1366,
//   height: 768,
// })
// await page.setRequestInterception(true)
// page.on("request", (interceptedRequest) => {
//   if (interceptedRequest.isInterceptResolutionHandled()) return
//   if (
//     interceptedRequest.url().endsWith(".png") ||
//     interceptedRequest.url().endsWith(".jpg")
//   )
//     interceptedRequest.abort()
//   else interceptedRequest.continue()
// })

// page.on("request", (request) => {
//   console.log("req")
//   console.log(request.url())
// })

// page.on("response", (response) => {
//   console.log("res")
//   console.log(response.url())
// })
browser.setCookie({
  name: "5bd4aa82278a9392700cda732bf3f9eb",
  value: "91378bff9cfc8ee165f0c4e40d0302aa",
  domain: "student.bmsit.ac.in",
  path: "/",
  expires: -1,
  size: 64,
  httpOnly: false,
  secure: false,
  session: true,
  priority: "Medium",
  sameParty: false,
  sourceScheme: "Secure",
  sourcePort: 443,
  partitionKey: undefined,
})
// console.log(await browser.cookies())
await page.goto("https://student.bmsit.ac.in/parentsodd/index.php")
// await page.goto("https://www.youtube.com")

const login = async (usn, dd, mm, yyyy, id) => {
  // DOB and USN entry
  await page.locator("#username").fill(usn)
  await page.select("#yyyy", yyyy)
  await page.select("#mm", mm)
  await page.select("#dd", `${dd} `)
  await page.locator("input[type='submit']").click()

  // id card no entry
  await page.locator("#user-input").fill(id)
  await page.locator("input[type='submit']").click()
}

await login("1BY25CS213", "28", "04", "2007", "19964")

await page.waitForSelector(".cn-btm-border")
debugger
const result = await page.$eval(".cn-stu-data1", (el) => el.textContent)
page.on("console", (msg) => console.log(msg.text()))
await page.evaluate(() => {
  // console.log("hii"),
})

// screenshot of dashboard
await page.screenshot({
  path: "screenshot1.jpg",
})

await page.pdf({
  path: "testingpdf.pdf",
})

// await page.title().then((title) => console.log(title))
browser.deleteCookie({
  name: "5bd4aa82278a9392700cda732bf3f9eb",
  value: "91378bff9cfc8ee165f0c4e40d0302aa",
  domain: "student.bmsit.ac.in",
  path: "/",
  expires: -1,
  size: 64,
  httpOnly: false,
  secure: false,
  session: true,
  priority: "Medium",
  sameParty: false,
  sourceScheme: "Secure",
  sourcePort: 443,
  partitionKey: undefined,
})
// console.log(await browser.cookies())
// await browser.close()
