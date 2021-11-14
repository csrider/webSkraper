const axios = require('axios')      //HTTP lib
const cheerio = require('cheerio')  //parser lib
const express = require('express')  //rooting lib

const PORT = 8000
const url = 'https://www.theguardian.com/uk'

// Provide our web interface
const app = express()

app.get('/', (req, res) => {
    res.json('This is the skraper')
})

app.get('/result', (req, res) => {
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
        res.json(articles)
    }).catch((err) => {
        res.json(err)
    });
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))