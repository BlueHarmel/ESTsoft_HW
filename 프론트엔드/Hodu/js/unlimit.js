const imageList = document.querySelector(".unlimit-scroll");
const newImgButton = document.querySelector(".newImgButton");
const continueArea = document.querySelector(".continueArea");
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
            <img src="${datas[0].download_url}" alt="추가 이미지${datas.index}">
            <img src="${datas[1].download_url}" alt="추가 이미지${datas.index}">
            <img src="${datas[2].download_url}" alt="추가 이미지${datas.index}">
        </div>`
}
window.addEventListener('scroll', ()=>{
    // 스크롤이 상단으로부터 얼마나 이동했는지 알아야 한다. (뷰포트의 높이 + 스크롤된 길이)
    // 화면에 로딩된 페이지(body)의 높이를 알아야 한다.
    // 뷰포트의 높이 + 스크롤된 길이 + 10 === 화면에 로딩된 페이지의 전체 높이
    if(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight){
        fetchImages(pageToFetch++);
    }
});

newImgButton.addEventListener("click", () => {
    fetchImages(pageToFetch);
    continueArea.innerHTML='';
});
