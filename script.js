let ModalBack = document.querySelector('.modal-bg')
let ModalOne = document.querySelector('.modal-1')
let ModalCloseOne = document.querySelector('.close-btn-1')
let MobalOpenOne = document.querySelector('#modal-1')


let ModalTwo = document.querySelector('.modal-2')
let ModalCloseTwo = document.querySelector('.close-btn-2')
let MobalOpenTwo = document.querySelector('#modal-2')


MobalOpenOne.onclick = () => {
    ModalBack.style.display = 'block'
    ModalBack.style.opacity = '1'
    ModalOne.style.display = 'block'



    setTimeout(() => {
        ModalOne.style.opacity = '1'
        ModalOne.style.top = '50%'
        ModalOne.style.left = '50%'
        ModalOne.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 300);

}
ModalCloseOne.onclick = () => {

    ModalOne.style.transform = 'translate(-50%, -50%) scale(0)'
    ModalOne.style.top = '-100px'
    ModalOne.style.left = '100%'
    ModalOne.style.opacity = '0'
    setTimeout(() => {
        ModalOne.style.display = 'none'
        ModalBack.style.display = 'none'
        ModalBack.style.opacity = '0'
        ModalOne.style.top = '-100px'
        ModalOne.style.left = '0'
    }, 300);
}



MobalOpenTwo.onclick = () => {

    ModalTwo.style.display = 'block'


    setTimeout(() => {
        ModalTwo.style.right = '0'
        ModalTwo.style.opacity = '1'
    }, 300);

}
ModalCloseTwo.onclick = () => {

    ModalTwo.style.opacity = '0'
    ModalTwo.style.right = '-592px'
    setTimeout(() => {
        ModalTwo.style.display = 'none'

    }, 300);

}
let pattern = {
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password: /^[A-Za-z]\w{7,14}$/,
}


let inp = document.querySelectorAll('.inp')

function valuedate(fild, regex) {
    if (regex.test(fild.value)) {
        fild.style.border = '2px solid green'
    } else {
        fild.style.border = '2px solid red'
    }
}


inp.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.getAttribute('name')
        console.log(key);
        valuedate(inp, pattern[key])
    }
})
