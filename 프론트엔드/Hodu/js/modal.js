const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
let input = document.getElementById("email-check");

// 이메일 조건 확인 후, 모달창 열기
openModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let email = input.value;
    if (emailCheck(email)) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // 스크롤바 제거
    } else if (email === "") {
        input.setCustomValidity("이메일이 입력되지 않았습니다.");
        input.reportValidity(); // 유효성 메시지를 사용자에게 즉시 표시
    } else {
        input.setCustomValidity("이메일 형식이 잘못되었습니다.");
        input.reportValidity(); // 유효성 메시지를 사용자에게 즉시 표시
    }
});
// 모달창 닫기
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤바 보이기
});


function emailCheck(email_address) {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(email_address);
}