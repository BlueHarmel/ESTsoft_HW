/**
 * 모달전체를 감싸 모달의 배경이 되는 div태그
 * @type {HTMLElement}
 */
const modal = document.getElementById("modal-container");
/**
 * 이메일을 입력 후, 클릭하면 모달을 반환하는 함수를 호출하는 버튼
 * @type {HTMLElement}
 */
const openModalBtn = document.getElementById("open-modal");
/**
 * 클릭하면 모달을 닫는 버튼
 * @type {HTMLElement}
 */
const closeModalBtn = document.getElementById("close-modal");
/**
 * 이메일을 입력받는 input 태그
 * @type {HTMLElement}
 */
let input = document.getElementById("email-input");

/**
 * 이메일 조건 확인 후, 정상적인 이메일 형식이면 모달창 열기
 */
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

/**
 * 모달창 닫기
 */
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤바 보이기
});

/**
 * 정규표현식을 통해 이메일 형식 확인 후, 정상이면 true 아니면 false를 반환
 * @param email_address
 * @returns {boolean}
 */
function emailCheck(email_address) {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(email_address);
}