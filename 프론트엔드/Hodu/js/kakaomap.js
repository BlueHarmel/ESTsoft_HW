/**
 * 지도를 표시할 div
 * @type {HTMLElement}
 * */
var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(33.4423379727783, 126.571449734542), // 지도의 최초 중심좌표
        level: 3 // 지도의 확대 레벨
    };
/**
 * 지도를 표시할 div와  지도 옵션으로  지도를 생성
 * @type {kakao.maps.Map}
 */
var map = new kakao.maps.Map(mapContainer, mapOption);
/**
 * 마커의 좌표
 * @type {kakao.maps.LatLng}
 */
var markerPosition  = new kakao.maps.LatLng(33.4423379727783, 126.571449734542);

/**
 * markerPosition을 position값으로 가지는 마커객체를 생성
 * @type {kakao.maps.Marker}
 */
var marker = new kakao.maps.Marker({
    position: markerPosition
});

/**
 * 마커객체를 markerPosition에 표시
 */
marker.setMap(map);

/**
 * 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수
 * @param maptype
 */
function setMapType(maptype) {
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview');
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}

/**
 * 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수
 */
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

/**
 * 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 축소하는 함수
 */
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}

/**
 * 전체화면과 전체화면 취소 토글버튼
 * @type {HTMLElement}
 */
const toggleFullscreenButton = document.getElementById('custom_fullscreen_toggle');
const toggleImg = document.getElementById('toggle_screen')
toggleFullscreenButton.addEventListener('click', function() {
    if (!document.fullscreenElement) {
        enterFullscreen(mapContainer);
    } else {
        exitFullscreen();
    }
});

/**
 * 클릭하면, map을 전체화면으로 확장시킨다.
 * @param element
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
    toggleImg.src='img/icon/close_fullscreen_icon.svg';
}

/**
 * 클릭하면 전체화면을 해제한다.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
    toggleImg.src='img/icon/full_fullscreen_icon.svg';
}

/**
 * 지도 중심을 핀 위치로 이동
 */
function setCenter() {
    map.setCenter(markerPosition);
}