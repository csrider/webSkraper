const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const PORT = 8000
const url = 'https://www.theguardian.com/uk'

// Get the package
const app = express()

axios(url)
    .then((result) => {
        const rawHtml = result.data
        const scrapedHtml = cheerio.load(rawHtml)
        const articles = []

        scrapedHtml('.fc-item__title', rawHtml).each(function() {
            const title = scrapedHtml(this).text()
            const url = scrapedHtml(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch((err) => {
        console.log(err)
    });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))