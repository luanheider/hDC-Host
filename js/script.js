const btn = document.getElementById('btn-action')
const menuMobile = document.querySelector('.menu-mobile')
const srcImg = document.querySelector('.icon')

const imgOpen = '/img/menu_white_36dp.svg'
const imgClose = '/img/close_white_36dp.svg'

const menuShow = () => {

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        srcImg.setAttribute('src', imgOpen)

    }else {
        menuMobile.classList.add('open')
        srcImg.setAttribute('src', imgClose)
    }

}

btn.addEventListener('click', menuShow)