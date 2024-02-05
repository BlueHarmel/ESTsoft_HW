async function fetchImages(pageNum) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=6`);

        if (!response.ok) {
            //사용자 정의 에러 함수
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();

        makeImageList(datas);
    } catch (e) {
        console.error('데이터를 가져오는데 문제가 생겼습니다.', e);
    }
}

const photosMain = document.querySelector('.photos-main');
const listPhotos = photosMain.querySelector(".list-photos");
const btnShow = photosMain.querySelector(".btn-more");
const btnEnd = photosMain.querySelector(".btn-end");
let pageToFetch = 1;

function makeImageList(datas) {
    datas.forEach((data) => {
        listPhotos.insertAdjacentHTML('beforeend', `<li>
                <button type="button"><img src="${data.download_url}" alt=""></button>
            </li>`)
    });
}

function throttling(callback, delay) {
    let timer = null;
    return () => {
        if (timer === null) {
            if (listPhotos.clientHeight + listPhotos.scrollTop + 20 >= listPhotos.scrollHeight) {
                timer = setTimeout(() => {
                    callback(pageToFetch++);
                }, delay);
            }
        }
    }
}
const throttleTraker = throttling(fetchImages, 500);
btnShow.addEventListener('click', () => {
    photosMain.classList.toggle('stop');
    listPhotos.style.height = '1400px';
    listPhotos.style.overflowY = 'scroll';
    listPhotos.style.width = '1295px';
    document.body.style.overflow = 'hidden';

    window.scrollTo({
        top: listPhotos.offsetTop + 1400,
        behavior: "smooth"
    });

    listPhotos.addEventListener('scroll',throttleTraker);
    fetchImages(pageToFetch++);
});

btnEnd.addEventListener('click', () => {
    photosMain.classList.toggle('stop');
    document.body.style.overflow = 'auto';
    listPhotos.removeEventListener('scroll', throttleTraker);
});
