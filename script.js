//Variables used for the customer counter
let log = document.getElementById("log");
let counter = document.getElementById("counter");
let count = 0;


//functions used for the customer counter
function increased() {
    count += 1;
    counter.textContent = count;
}

function save() {
    let saved = count + ", ";
    log.textContent += saved;
    counter.textContent = 0;
    count = 0;
}