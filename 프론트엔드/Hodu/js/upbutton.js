const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight * 0.2);
    if(document.documentElement.scrollTop >= document.documentElement.offsetHeight * 0.2){
        upButton.style.visibility = "visible";
    }else{
        upButton.style.visibility = "hidden";
    }
})