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

window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 30}px`;
    cursor.style.top = `${e.pageY - 32}px`;
});