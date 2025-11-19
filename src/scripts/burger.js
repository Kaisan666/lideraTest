const burger = document.querySelector(".burger")
if (burger){
const header = document.querySelector(".header")
const burgerBtn = header.querySelector(".header__burger-btn")

let isBurgerClosed = true
burgerBtn.addEventListener("click", (e) => {
    if (isBurgerClosed){
    openBurgerMenu(e)
    isBurgerClosed = false
    }
    else{
        closeBurgerMenu()
        isBurgerClosed = true
    }
})

function openBurgerMenu(e){
    e.stopPropagation()
    burgerBtn.classList.add("open")
    burger.classList.add("open")
}
function closeBurgerMenu(){
    burgerBtn.classList.remove("open")
    burger.classList.remove("open")
}
document.body.appendChild(burger)
}

