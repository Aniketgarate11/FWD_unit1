
//Sellect DOM elements

const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const dateEl = document.getElementById("Date");
const yearEl = document.getElementById("Year")

// get the current Date
const data = new Date();
console.log(data);



// Define options for formatting
localLang = "en-us"

// Update DOM elements with formatted date parts
monthEl.innerText = data.toLocaleString(localLang ,{
    month:"long"
});

dayEl.innerText = data.toLocaleString(localLang , {
    weekday :"long"
})

dateEl.innerText = data.getDate();

yearEl.innerText = data.getFullYear();
const monthEl2 = document.getElementById