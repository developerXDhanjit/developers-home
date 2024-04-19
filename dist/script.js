/* 1. Quote API  */

/* 2. Creating Clock in the website  */

let timeHtml = document.querySelector("#time");




setInterval(() => {
    let timeNow = new Date().toLocaleTimeString()
    timeHtml.innerHTML = `${timeNow}`
}, 1)

