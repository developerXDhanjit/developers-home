/* 1. Quote API  */

//Getting the response of api 
let getUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness"
let githubUrl = "https://api.github.com/users/developerxdhanjit"
let apiKey = 'HvscM2AYH46LgwuhJ10IFg==In2srCOkkcWApifx'

let quote = document.querySelector('#quote')
let author = document.querySelector('#author')
let category = document.querySelector('#quote-title')


async function getQuote() {
    try {
        let headers =
            { 'X-Api-Key': apiKey }

        let respone = await fetch(getUrl, { headers })
        let data = await respone.json()
        let quoteObj = data[0]

        //Converting into a displayable format 
        quote.innerHTML = quoteObj.quote
        author.innerHTML = quoteObj.author
        category.innerHTML = quoteObj.category.toUpperCase()


    }
    catch (error) {
        console.log(`E : ${error}`);
    }
}


//Displaying it on the website on load 
window.addEventListener("DOMContentLoaded", () => {
    getQuote()
})


/* 2. Creating Clock in the website  */


let timeHtml = document.querySelector("#time");

setInterval(() => {
    let timeNow = new Date().toLocaleTimeString()
    timeHtml.innerHTML = `${timeNow}`
}, 1)



/* 3. Search output  */
// Selecting the variables 

const userInput = document.querySelector('#userInput')
const myForm = document.querySelector('#searchForm')


// Default Seach google 
myForm.addEventListener("submit", (event) => {
    event.preventDefault();


    const userInputValue = userInput.value;

    let redirectUrl = `https://www.google.com/search?q=${userInputValue}`

    if (userInputValue.trim() === '') {
        alert('Enter something to search')
        return
    }

    window.open(redirectUrl, '_blank')
    userInput.value = ''

})

// Choosing different engines 

let searchEngines = {
    google: "https://www.google.com/search?q=",
    wiki: "https://en.wikipedia.org/wiki/w/index.php?title=",
    yahoo: "https://search.yahoo.com/search?p=",
    duckduckgo: "https://duckduckgo.com/?q=" ,
    bing: "http://www.bing.com/search?q=",
}
