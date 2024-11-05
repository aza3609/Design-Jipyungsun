const cursor = document.getElementById('cursor');
const links = document.querySelectorAll('a');


document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('large'); // 링크에 마우스 오버 시 클래스 추가
    });

    link.addEventListener('mouseout', () => {
        cursor.classList.remove('large'); // 링크에서 마우스가 나가면 클래스 제거
    });
});