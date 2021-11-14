const feedDisplay = document.querySelector('#feed')

http://localhost:8000/result

fetch('http://localhost:8000/result')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))