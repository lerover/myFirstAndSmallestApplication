const countEl = document.querySelector('.count')

 
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




