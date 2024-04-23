/* 1. Quote API  */

//Getting the response of api
let getUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness";
let githubUrl = "https://api.github.com/users/developerxdhanjit";
let apiKey = "HvscM2AYH46LgwuhJ10IFg==In2srCOkkcWApifx";

let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let category = document.querySelector("#quote-title");

async function getQuote() {
  try {
    let headers = { "X-Api-Key": apiKey };

    let respone = await fetch(getUrl, { headers });
    let data = await respone.json();
    let quoteObj = data[0];

    //Converting into a displayable format
    quote.innerHTML = quoteObj.quote;
    author.innerHTML = quoteObj.author;
    category.innerHTML = quoteObj.category.toUpperCase();
  } catch (error) {
    console.log(`E : ${error}`);
  }
};

//Displaying it on the website on load
window.addEventListener("DOMContentLoaded", () => {
  //   getQuote()
});

/* 2. Creating Clock in the website  */

let timeHtml = document.querySelector("#time");

setInterval(() => {
  let timeNow = new Date().toLocaleTimeString();
  timeHtml.innerHTML = `${timeNow}`;
}, 1);

/* 3. Search output  */
// Selecting the variables

const userInput = document.querySelector("#userInput");
const myForm = document.querySelector("#searchForm");

// Default Seach google
/* myForm.addEventListener("submit", (event) => {
       event.preventDefault();
   
   
       const userInputValue = userInput.value;
   
       let redirectUrl = `https://www.google.com/search?q=${userInputValue}`
   
       if (userInputValue.trim() === '') {
           alert('Enter something to search')
           return
       }
   
       window.open(redirectUrl, '_blank')
       userInput.value = ''

}) */

// Choosing different engines

let searchButtons = Array.from(
  document.getElementById("search-engine").children
);

let selectedSearchEngine = "google";

let searchTerm = userInput.value;
let redirectUrl;

let searchEngines = {
  google: "https://www.google.com/search?q=",
  wiki: "https://en.wikipedia.org/wiki/",
  yahoo: "https://search.yahoo.com/search?p=",
  duckduckgo: "https://duckduckgo.com/?q=",
  bing: "http://www.bing.com/search?q=",
};

/* Selecting the search engine */

searchButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedSearchEngine = button.id.toLocaleLowerCase();
    redirect(selectedSearchEngine, searchTerm);
    /* Style to change the border to each element */
  });
});

userInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  searchTerm = userInput.value;
  if (event.key === "Enter" && searchTerm) {
    redirect(selectedSearchEngine, searchTerm);
  }
});

/* Function to redirect To the Url */

function redirect(searchEngineName, searchTerm) {
  if (searchTerm === "") {
    console.log("Value is  empty");
  } else {
    searchTerm = userInput.value;

    redirectUrl = searchEngines[searchEngineName] + searchTerm;

    window.open(redirectUrl, "_blank");

    userInput.value = "";
  }
}

/* Tasks Code  */

const taskInput = document.querySelector("#addToDoValue");
const taskSubmitBtn = document.querySelector("#addToDoBtn");
const toDoUl = document.querySelector("#ToDoUl");

/* Array to get values from local Storage  */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* saving to Local Storage  */

const saveTasksToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

/* Rendering Tasks to the html page  */

const renderTasks = () => {
  toDoUl.innerHTML = "";

  tasks.forEach(renderTask);
};

/* For each task  */

const renderTask = (task) => {
  const liElement = document.createElement("li");

  const { text , completed } = task;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.completed = completed;

  checkbox.addEventListener("change", () => {
    task.completed = !task.completed;
    saveTasksToLocalStorage(); // Update localStorage on completion change
    renderTasks(); // Re-render tasks after completion change
  });

  liElement.textContent = text;
  liElement.appendChild(checkbox);
  toDoUl.appendChild(liElement);

};

/* Handling form submit  */

const handleFormSubmit = (e) => {
  e.preventDefault();

  const value = taskInput.value.trim();

  if (!value) {
    alert("Put a valid value ");
    return
  }

  const newTask = {
    text: value,
    completed: false,
  };

  tasks.push(newTask);
  saveTasksToLocalStorage();
  renderTasks();


  taskInput.value = ""; //Clears the value in input field

};

taskSubmitBtn.addEventListener("click", handleFormSubmit);

renderTasks(); // InitialRendering
