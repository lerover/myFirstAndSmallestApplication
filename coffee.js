let customerCount = []

const countEl = document.querySelector('.count')
let greeting = 'Good Moring'
let customerName = 'Win'
const titleEl = document.querySelector('.greeting')
 
let count = 0
countEl.innerText = count
function increase() {
     count = count + 1
     countEl.innerText = count
}

function decrease() {
    count = count - 1
    countEl.innerText = count
}

function save() {
    customerCount.push(count)
    console.log(customerCount)
   
}

function greet() {
    titleEl.innerText = greeting + ' ' + customerName
}



