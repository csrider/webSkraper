const feedDisplay = document.querySelector('#feed')

// Get data from the node.js output and populate the front end
fetch('http://localhost:8000/result')
    .then(response => response.json())
    .then(data => {
        data.forEach(article => {
            const articleItem = `<h4><a href="` + article.url + `">` + article.title + `</a></h4>`
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))