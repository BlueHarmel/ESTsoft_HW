/**
 * 무한 스크롤 영역전체를 지정하는 div태그
 * @type {HTMLElement}
 */
const imageList = document.querySelector(".unlimit-scroll-container");
/**
 * 클릭하면 무한스크롤을 시작하는 버튼
 * @type {HTMLElement}
 */
const newImgButton = document.querySelector(".newImgButton");
/**
 * newImgButton을 감싸는 div태그
 * @type {HTMLElement}
 */
const continueArea = document.querySelector(".continue-container");
/**
 * 무한스크롤의 진행도를 나타내는 progressBar을 감싸는 div 태그
 * @type {HTMLElement}
 */
const progressContainer = document.querySelector('.progress-container');

/**
 * setTimeout의 반환값인 timer의 id 값을 저장하는 변수
 * @type {number}
 */
let timer = null;
/**
 * API에서 가져올 3장의 이미지 중 첫번째의 index를 나타내는 변수
 * @type {number}
 */
let pageToFetch = 0;

/**
 * API서버에서 이미지를 JSON형식으로 3장 가져와서 javascript객체로 변환해 datas에 저장한 후, makeImageList에 전달하는 함수
 * @param skipNum
 * @returns {Promise<void>}
 */
async function fetchImages(skipNum) {
    try {
        const response = await fetch(`https://cataas.com/api/cats?skip=${skipNum}&limit=3`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }
        const datas = await response.json();
        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

/**
 * datas의 _id와 tags 정보를 통해 HTML요소를 추가
 * @param datas
 */
function makeImageList(datas) {
    imageList.innerHTML += `<div>
            <img class="cat-img" src="https://cataas.com/cat/${datas[0]._id}" alt="추가 이미지(${datas[0].tags})">
            <img class="cat-img" src="https://cataas.com/cat/${datas[1]._id}" alt="추가 이미지(${datas[1].tags})">
            <img class="cat-img" src="https://cataas.com/cat/${datas[2]._id}" alt="추가 이미지(${datas[2].tags})">
        </div>`
}

/**
 * progressBar의 width = (스크롤된 길이 / (전체 컨텐츠의 높이 - .unlimit-scroll의 내부 높이)) * 100
 * 스크롤된 길이 == 전체 컨텐츠의 높이 - .unlimit-scroll의 내부 높이일 때 width가 최대치이다.
 * .unlimit-scroll의 내부 높이 + 스크롤된 길이 + 20 >= 전체 컨텐츠의 높이일때 fetchImages를 호출, 새로운 사진을 얻어온다.
 */
imageList.addEventListener('scroll', () => {
    /** @type {HTMLElement} */
    const progressBar = document.querySelector(".progress-bar");
    /** @type {number} */
    const progress = (imageList.scrollTop / (imageList.scrollHeight - imageList.clientHeight)) * 100;
    progressBar.style.visibility = 'visible';
    progressBar.style.width = progress + "%";

    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        if (imageList.clientHeight + imageList.scrollTop + 20 >= imageList.scrollHeight) {
            fetchImages(pageToFetch+=3);
        }
    }, 100);
});
/**
 * show more 버튼을 누르면 기존의 continueArea가 없어지고, progressContainer이 visible상태가 된다.
 */
newImgButton.addEventListener("click", () => {
    fetchImages(pageToFetch);
    continueArea.innerHTML = '';
    progressContainer.style.visibility = "visible";
});