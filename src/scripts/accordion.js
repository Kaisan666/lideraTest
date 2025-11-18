const pageNavs = document.querySelectorAll(".footer__pages")
pageNavs.forEach(pageNav => {
    // let isOpen = {value : false}
    const title = pageNav.querySelector(".footer__pages-title")
    const accordion = pageNav.querySelector(".footer__pages-accordion")
    accordion.dataset.open = "false"
    const accordionHeight = getComputedStyle(accordion).getPropertyValue("--height").trim()
    const pagesList = pageNav.querySelector(".footer__pages-list")
    title.addEventListener("click", ()=> {
        console.log(1233321);
        
        if (window.innerWidth <= 425){
            if (accordion.dataset.open === "true"){
                accordion.style.setProperty("--height", 0 + "px")
                accordion.dataset.open = "false"
            }
            else {
                console.log(12938123890123089);
                
                closeAllAccordion()
                accordion.style.setProperty("--height", pagesList.offsetHeight + "px")
                accordion.dataset.open = "true"
            }
        }
    })
})


function openAccordion(accordionNode){
    
}
function closeAllAccordion(){
    pageNavs.forEach(pageNav => {
        const accordion = pageNav.querySelector(".footer__pages-accordion")
        accordion.style.setProperty("--height", 0 + "px")
            accordion.dataset.open = "false";
    })
}