window.onload = () => {
    setTimeout(() => {
        const video = document.querySelector<HTMLVideoElement>('#intro')!;
        video.play();
    }, 1000);
};

window.addEventListener('scroll', () => {
    const missionTitle = document.querySelector('#mission-title') as HTMLElement;
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    missionTitle.style.transform = `translateX(${scrollPercentage * 100}%)`;

    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.width = `${scrollPercentage * 100}%`;
});

const cursor = document.querySelector('.cursor') as HTMLElement;
let cursorPosition = { x: 0, y: 0 };

window.addEventListener('mousemove', function (e) {
    cursor.style.left = `${e.pageX - 30}px`;
    cursor.style.top = `${e.pageY - 32}px`;
    cursorPosition.x = e.pageX;
    cursorPosition.y = e.pageY;
});

setInterval(function () {
    var elem = document.createElement('img');
    elem.src = 'images/falling_star.png';
    var size = Math.ceil(Math.random() * 20) + 'px';
    elem.style.position = 'fixed';
    elem.style.zIndex = 6;
    var randomAngle = Math.random() * Math.PI * 2;
    var randomRadius = Math.random() * 30 + 5;
    elem.style.top = cursorPosition.y - window.scrollY + Math.sin(randomAngle) * randomRadius + 'px';
    elem.style.left = cursorPosition.x + Math.cos(randomAngle) * randomRadius + 'px';
    elem.style.width = size;
    elem.style.opacity = "0.5";
    elem.style.height = size;
    elem.style.animation = "fallingsparkles 1s";
    elem.style.pointerEvents = 'none';
    document.body.appendChild(elem);
    
    window.setTimeout(function () {
        document.body.removeChild(elem);
    }, Math.round(Math.random() * 1000));

}, 300); // create the falling trail every 500 milliseconds