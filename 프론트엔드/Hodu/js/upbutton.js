/**
 * 페이지 최상단으로 이동하는 버튼
 * @type {HTMLElement}
 */
const upButton = document.querySelector(".up-button");

/**
 * 스크롤이 window 객체 전체 높이의 40%이상이면 upButton의 visibility를 visible로 변경
 * 40% 미만이면 visibility를 hidden으로 변경
 */
window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop >= document.documentElement.offsetHeight * 0.4){
        upButton.style.visibility = "visible";
    }else{
        upButton.style.visibility = "hidden";
    }
})