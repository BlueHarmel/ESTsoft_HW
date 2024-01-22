const imageList = document.querySelector(".unlimit-scroll-container");
const newImgButton = document.querySelector(".newImgButton");
const continueArea = document.querySelector(".continue-container");
const progressContainer = document.querySelector('.progress-container');

let timer = null;
let pageToFetch = 0;

async function fetchImages(pageNum) {
    try {
        const response = await fetch(`https://cataas.com/api/cats?skip=${pageNum}&limit=3`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }
        const datas = await response.json();
        makeImageList(datas);
    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas) {
    imageList.innerHTML += `<div>
            <img src="http://cataas.com/cat/${datas[0]._id}" alt="추가 이미지 (${datas[0].tags})">
            <img src="http://cataas.com/cat/${datas[1]._id}" alt="추가 이미지 (${datas[1].tags})">
            <img src="http://cataas.com/cat/${datas[2]._id}" alt="추가 이미지 (${datas[2].tags})">
        </div>`
}

imageList.addEventListener('scroll', () => {
    //.unlimit-scroll의 내부 높이 + 스크롤된 길이 = 전체 컨텐츠의 높이일 때 최대치
    const progressBar = document.querySelector(".progress-bar");
    const progress = (imageList.scrollTop / (imageList.scrollHeight - imageList.clientHeight)) * 100;
    progressBar.style.visibility = 'visible';
    progressBar.style.width = progress + "%";

    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        // .unlimit-scroll의 내부 높이 + 스크롤된 길이 + 20 >= 전체 컨텐츠의 높이
        // 위 조건이 만족될때 새로운 사진을 얻어온다.
        if (imageList.clientHeight + imageList.scrollTop + 20 >= imageList.scrollHeight) {
            fetchImages(pageToFetch+=3);
        }
    }, 100);
});

newImgButton.addEventListener("click", () => {
    fetchImages(pageToFetch++);
    continueArea.innerHTML = '';
    progressContainer.style.visibility = "visible";
});