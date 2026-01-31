import puppeteer from "puppeteer"
const browser = await puppeteer.launch({
  headless: false,
  //   ignoreHTTPSErrors: true,
  //   args: ["--ignore-certificate-errors"],
})

const page = await browser.newPage()

// page.on("request", (request) => {
//   console.log("req")
//   console.log(request.url())
// })

// page.on("response", (response) => {
//   console.log("res")
//   console.log(response.url())
// })
await page.goto("https://student.bmsit.ac.in/parents/index.php")
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
// const result = await page.$eval(".cn-stu-data1", (el) => el.textContent)
// console.log(result)

const el = await page.locator(".cn-stu-data1").waitHandle().textContent
console.log(el)
// screenshot of dashboard
await page.screenshot({
  path: "screenshot1.jpg",
})
// console.log("hii")
// await page.title().then((title) => console.log(title))
// await browser.close()
