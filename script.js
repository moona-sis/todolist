let add = document.querySelector('#adding')
console.log(add)
add.addEventListener('click', addToList)



function addToList() {
    let div = document.createElement('div')
    let inputvalue = document.querySelector('#value').value
    let p = document.createElement('p')
    p.innerHTML = inputvalue

    console.log(inputvalue)
    let contcheck = document.createElement('div')
    let chechbox = document.createElement('input')

    contcheck.appendChild(chechbox)

    let removeit = document.createElement('div')
    let txtremoveit = document.createTextNode("Delete")

    contcheck.setAttribute("class", "divcheck")

    p.setAttribute("class", "text")
    chechbox.setAttribute("type", "checkbox")
    removeit.setAttribute("class", "deletebtn")
    div.setAttribute("class", "divcontent")
    chechbox.setAttribute("class", "checkbox")

    removeit.appendChild(txtremoveit)
    removeit.addEventListener('click', () => {
        div.parentNode.removeChild(div)
    })

    div.appendChild(p)
    div.appendChild(contcheck)
    div.appendChild(removeit)

    let todolist = document.querySelector('.todolist')
    todolist.appendChild(div)

   
}


