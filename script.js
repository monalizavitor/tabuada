let num = document.getElementById('txtnum')
let res = document.getElementById('res')
let tab = document.getElementById('seltab')


function calc() {
    let item = document.createElement('option')
    if (num.value.length == 0) {
        alert('O número precisa ser maior que 0.')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <= 10) {
    
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }



}


