const imageList = document.querySelector(".unlimit-scroll");
const newImgButton = document.querySelector(".newImgButton");
const continueArea = document.querySelector(".continueArea");

let timer = null;
let pageToFetch = 1;

async function fetchImages(pageNum) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=3`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}
function makeImageList(datas) {
        imageList.innerHTML += `<div>
            <img src="${datas[0].download_url}" alt="추가 이미지${datas[0].id}">
            <img src="${datas[1].download_url}" alt="추가 이미지${datas[1].id}">
            <img src="${datas[2].download_url}" alt="추가 이미지${datas[2].id}">
        </div>`
}
imageList.addEventListener('scroll', ()=>{
    if (timer) {
        clearTimeout(timer);
    }
    timer= setTimeout(()=> {
        // .unlimit-scroll의 내부 높이 + 스크롤된 길이 + 10 >= 전체 컨텐츠의 높이
        // 위 조건이 만족될때 새로운 사진을 얻어온다.
        if(imageList.clientHeight + imageList.scrollTop + 20 >= imageList.scrollHeight){
            fetchImages(pageToFetch++);
        }
    },200);
});

newImgButton.addEventListener("click", () => {
    fetchImages(pageToFetch++);
    continueArea.innerHTML='';
});
