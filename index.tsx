window.onload = () => {
    setTimeout(() => {
        const video = document.querySelector<HTMLVideoElement>('#intro')!;
        video.play();
    }, 1000);
};

const eventDescription = document.querySelector('.event-description') as HTMLElement;
eventDescription.style.opacity = '0';

const fallEventGradient = document.querySelector('#fall-event-gradient') as HTMLElement;
fallEventGradient.style.opacity = '0';

window.addEventListener('scroll', () => {
    // slide the "mission" title
    const missionTitle = document.querySelector('#mission-title') as HTMLElement;
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    missionTitle.style.transform = `translateX(${scrollPercentage * 100}%)`;

    // move the progress bar
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.width = `${scrollPercentage * 100}%`;

    // show the event description
    if(window.scrollY <= 1700) {
        eventDescription.style.opacity = '0';
        // eventDescription.style.transition = 'none';
    } else if(window.scrollY > 1700 && window.scrollY < 2300) {
        eventDescription.style.opacity = '1';
        // eventDescription.style.transition = 'opacity 1s';
    } else {
        eventDescription.style.opacity = '0';
        // eventDescription.style.transition = 'opacity 1s';
    }

    // move the photos
    const fallEvent1 = document.querySelector('#fall-event-1') as HTMLElement;
    fallEvent1.style.transform = `translate(0px, ${-1000 * scrollPercentage}%) scale(0.8)`;

    const fallEvent2 = document.querySelector('#fall-event-2') as HTMLElement;
    fallEvent2.style.transform = `translate(0px, ${-600 * scrollPercentage}%) scale(0.8)`;

    const fallEvent3 = document.querySelector('#fall-event-3') as HTMLElement;
    fallEvent3.style.transform = `translate(0px, ${-450 * scrollPercentage}%) scale(0.7)`;

    const fallEvent4 = document.querySelector('#fall-event-4') as HTMLElement;
    fallEvent4.style.transform = `translate(0px, ${-300 * scrollPercentage}%) scale(0.7)`;

    // add gradient with photos
    if(window.scrollY > 1600 && window.scrollY < 2400) {
        fallEventGradient.style.opacity = '1';
        progressBar.style.backgroundColor = 'red';
    } else {
        fallEventGradient.style.opacity = '0';
        progressBar.style.backgroundColor = 'white';
    }
});

const cursor = document.querySelector('.cursor') as HTMLElement;
let cursorPosition = { x: 0, y: 0 };

window.addEventListener('mousemove', function (e) {
    cursor.style.left = `${e.clientX - 30}px`;
    cursor.style.top = `${e.clientY - 32}px`;
    cursorPosition.x = e.clientX;
    cursorPosition.y = e.clientY;
});

setInterval(function () {
    const elem = document.createElement('img');
    elem.src = 'images/falling_star.png';
    let size = Math.ceil(Math.random() * 20) + 'px';
    elem.style.position = 'fixed';
    elem.style.zIndex = 6;
    let randomAngle = Math.random() * Math.PI * 2;
    let randomRadius = Math.random() * 30 + 5;
    elem.style.top = cursorPosition.y + Math.sin(randomAngle) * randomRadius + 'px';
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

}, 300); // create the falling trail every 300 milliseconds