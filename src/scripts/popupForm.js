const popup = document.querySelector(".index-page.popup-form")
const emailInput = popup.querySelector(".popup-form__input-mail")
const popupButtons = document.querySelectorAll(".popup-btn")
const closeBtn = popup.querySelector(".popup-form__close")
const backgroundFilter = document.createElement("div")
backgroundFilter.classList.add("background-filter") 

let controller = null

function closePopup(){
    
    popup.classList.remove("active")
    popup.reset()
    console.log(123);
}
export function openPopup(){
    popup.classList.add("active")
    
}

function openPopupBtnHandler(e){
    e.stopPropagation();
    addBackground(".index-page.popup-form")
    openPopup()
}

 function removeBackground(){
    backgroundFilter.classList.remove("active")
    backgroundFilter.addEventListener("transitionend", () => {
        backgroundFilter.remove()
    }, {once : true})
    controller.abort()

}
export function addBackground(selector){
    controller = new AbortController()
    document.body.appendChild(backgroundFilter)
    backgroundFilter.classList.add("active")
    document.addEventListener("click", (e) => {
        outSideClickHandler(e, selector)
    } , {signal : controller.signal})
}

function outSideClickHandler(e, selector){
    console.log(selector);
    console.log(e.target);
    
    if (!e.target.closest(selector)){
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