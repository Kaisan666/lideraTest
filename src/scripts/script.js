import "./swipers"
import "./accordion"
const popupButtons = document.querySelectorAll(".popup-btn")
const popup = document.querySelector(".index-page.popup-form")
const emailInput = popup.querySelector(".popup-form__input-mail")

const closeBtn = popup.querySelector(".popup-form__close")
const backgroundFilter = document.createElement("div")
backgroundFilter.classList.add("background-filter") 

function closePopup(){
    
    popup.classList.remove("active")
    popup.reset()
    console.log(123);
}
function openPopup(){
    popup.classList.add("active")
    
}

function openPopupBtnHandler(e){
    e.stopPropagation();
    addBackground()
    openPopup()
}

function removeBackground(){
    backgroundFilter.classList.remove("active")
    backgroundFilter.addEventListener("transitionend", () => {
        backgroundFilter.remove()
    }, {once : true})
    document.removeEventListener("click", outSideClickHandler)

}
function addBackground(){
    document.body.appendChild(backgroundFilter)
    backgroundFilter.classList.add("active")
    document.addEventListener("click", outSideClickHandler)
}

function outSideClickHandler(e){
    console.log(1231231232131);
    
    // e.preventDefault()
    // e.stopPropagation()
    if (!e.target.closest(".index-page.popup-form")){
        closePopup()
        removeBackground()
    }
}
function closeBtnClickHandler(e){
    e.preventDefault()
    e.stopPropagation()
    closePopup()
    removeBackground()
}


popupButtons.forEach(btn => {
    btn.addEventListener("click", openPopupBtnHandler)
})
closeBtn.addEventListener("click", closeBtnClickHandler)

function validateForm(e){
    e.preventDefault()
    console.log(2133);
    
    const haveError = {value : false}
    const currentErrors = popup.querySelectorAll(".popup-form__error-message")
    currentErrors.forEach(error => {
        console.log(error, "error");
        
        error.remove()
    })
    validateEmail(haveError)
    if (haveError.value){
        return
    }
    (async ()=> {
        const formData = new FormData(popup)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method : "POST",
            body : formData
        })
        const data = await response.json()
        console.log(data);
    })()
    
}

function validateEmail(haveError){
    console.log(haveError);
    const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const errorMessage = document.createElement("span")
    errorMessage.classList.add("popup-form__error-message")
    if (emailInput.value.trim().length < 5){
        haveError.value = true
        errorMessage.innerText = "Email can't be so short"
        emailInput.closest(".popup-form__field").appendChild(errorMessage)
        return
    }
    else if (!emailMask.test(emailInput.value)){
        haveError.value = true
        errorMessage.innerText = "Email has be in \"name@domain.com\" format"
        emailInput.closest(".popup-form__field").appendChild(errorMessage)
        return
    }
}

popup.addEventListener("submit", validateForm)