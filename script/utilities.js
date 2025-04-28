function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText)
}

function UpdateInnerText(id, update) {
    document.getElementById(id).innerText = update;
}

function display(id,status){
    document.getElementById(id).style.display = status;
}

function getElement(id){
    return document.getElementById(id)
}

// date share function

const s = new Date();
const timee = s.getHours() + ":"  + s.getMinutes() + ":" + s.getSeconds();
const dayy = s.getDay();
const monthh = s.getMonth();
const datee = s.getDate()
const yearr = s.getFullYear()

const div = document.createElement("div");


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

function Day(){return days[dayy];}
function Datee(){return datee;}
function Month(){return months[monthh];}
function Year() { return yearr;}
function Timee(){return timee;}