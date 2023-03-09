let customerCount = []

const countEl = document.querySelector('.count')
let greeting = 'Good Moring'
let customerName = 'Win'
const titleEl = document.querySelector('.greeting')
 
let count = 0
countEl.textContent = count
function increase() {
     count = count + 1
     countEl.textContent = count
}

function decrease() {
    if (count>0) {
        count = count - 1
        countEl.textContent = count
    }}

function save() {
    customerCount.push(count)
    console.log(customerCount)
   
}

function greet() {
    titleEl.textContent = greeting + ' ' + customerName
}

function reset() {
count = 0
countEl.textContent=count
}



