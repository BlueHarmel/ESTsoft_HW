const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop >= document.documentElement.offsetHeight * 0.4){
        upButton.style.visibility = "visible";
    }else{
        upButton.style.visibility = "hidden";
    }
})