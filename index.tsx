window.onload = () => {
    setTimeout(() => {
        const video = document.querySelector<HTMLVideoElement>('#intro')!;
        video.play();
    }, 1000);
};

const eventDescription = document.querySelector('.event-description') as HTMLElement;
eventDescription.style.transition = 'none';
eventDescription.style.opacity = '0';

const halloweenEventGradient = document.querySelector('#halloween-event-gradient') as HTMLElement;
halloweenEventGradient.style.transition = 'none';
halloweenEventGradient.style.opacity = '0';

const showcaseEventGradient = document.querySelector('#showcase-event-gradient') as HTMLElement;
showcaseEventGradient.style.transition = 'none';
showcaseEventGradient.style.opacity = '0';

const nightmarketEventGradient = document.querySelector('#nightmarket-event-gradient') as HTMLElement;
nightmarketEventGradient.style.transition = 'none';
nightmarketEventGradient.style.opacity = '0';


// get the event dates
const halloweenEventDate = document.querySelector('#halloween-event-date') as HTMLElement;
const showcaseEventDate = document.querySelector('#showcase-event-date') as HTMLElement;
const nightmarketEventDate = document.querySelector('#nightmarket-event-date') as HTMLElement;

// event date box
const halloweenEventName1Box = document.querySelector('#halloween-event-name-1-box') as HTMLElement;

// get all the event titles
const halloweenEventName1 = document.querySelector('#halloween-event-name-1') as HTMLElement;
const halloweenEventName2 = document.querySelector('#halloween-event-name-2') as HTMLElement;
const halloweenEventName3 = document.querySelector('#halloween-event-name-3') as HTMLElement;

window.addEventListener('scroll', () => {
    // slide the "mission" title
    const missionTitle = document.querySelector('#mission-title') as HTMLElement;
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    missionTitle.style.transform = `translateX(${scrollPercentage * 100}%)`;

    // move the progress bar
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.width = `${scrollPercentage * 100}%`;

    // show the event description
    if(window.scrollY < 1500) {
        eventDescription.style.opacity = '0';

    } else if(window.scrollY > 1500 && window.scrollY < 1700) {
        showcaseEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        nightmarketEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';

        // name animations
        halloweenEventName1.style.animation = 'slide-down-name 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventName2.style.animation = 'slide-down-name 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventName3.style.animation = 'slide-down-name 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';

    } else if(window.scrollY > 1700 && window.scrollY < 2400) {
        eventDescription.style.opacity = '1';
        showcaseEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventDate.style.animation = 'slide-up 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        nightmarketEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';

        // name animations
        halloweenEventName1.style.opacity = '0';
        halloweenEventName1.style.animation = 'slide-up-name 0.6s cubic-bezier(0, 0.1, 0.12, 0.99) 0.6s 1 normal forwards';
        halloweenEventName2.style.opacity = '0';
        halloweenEventName2.style.animation = 'slide-up-name 0.6s cubic-bezier(0, 0.1, 0.12, 0.99) 0.8s 1 normal forwards';
        halloweenEventName3.style.opacity = '0';
        halloweenEventName3.style.animation = 'slide-up-name 0.6s cubic-bezier(0, 0.1, 0.12, 0.99) 1.2s 1 normal forwards';

    } else if(window.scrollY > 2400 && window.scrollY < 3200) {
        eventDescription.style.opacity = '1';
        showcaseEventDate.style.animation = 'slide-up 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        nightmarketEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';

        // name animations
        halloweenEventName1.style.animation = 'slide-down-name 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventName2.style.animation = 'slide-down-name 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventName3.style.animation = 'slide-down-name 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';

    } else if(window.scrollY > 3200 && window.scrollY < 3800){
        eventDescription.style.opacity = '1';
        showcaseEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        nightmarketEventDate.style.animation = 'slide-up 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
    } else {
        eventDescription.style.opacity = '0';
        showcaseEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        halloweenEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
        nightmarketEventDate.style.animation = 'slide-down 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards';
    }

    // move the photos
    const halloweenEvent1 = document.querySelector('#halloween-event-1') as HTMLElement;
    halloweenEvent1.style.transform = `translate(0px, ${-1000 * scrollPercentage}%) scale(0.8)`;
    const halloweenEvent2 = document.querySelector('#halloween-event-2') as HTMLElement;
    halloweenEvent2.style.transform = `translate(0px, ${-600 * scrollPercentage}%) scale(0.8)`;
    const halloweenEvent3 = document.querySelector('#halloween-event-3') as HTMLElement;
    halloweenEvent3.style.transform = `translate(0px, ${-450 * scrollPercentage}%) scale(0.7)`;
    const halloweenEvent4 = document.querySelector('#halloween-event-4') as HTMLElement;
    halloweenEvent4.style.transform = `translate(0px, ${-300 * scrollPercentage}%) scale(0.7)`;

    const showcaseEvent1 = document.querySelector('#showcase-event-1') as HTMLElement;
    showcaseEvent1.style.transform = `translate(0px, ${-1000 * scrollPercentage}%) scale(0.8)`;
    const showcaseEvent2 = document.querySelector('#showcase-event-2') as HTMLElement;
    showcaseEvent2.style.transform = `translate(0px, ${-600 * scrollPercentage}%) scale(0.8)`;
    const showcaseEvent3 = document.querySelector('#showcase-event-3') as HTMLElement;
    showcaseEvent3.style.transform = `translate(0px, ${-450 * scrollPercentage}%) scale(0.7)`;
    const showcaseEvent4 = document.querySelector('#showcase-event-4') as HTMLElement;
    showcaseEvent4.style.transform = `translate(0px, ${-300 * scrollPercentage}%) scale(0.7)`;

    const nightmarketEvent1 = document.querySelector('#nightmarket-event-1') as HTMLElement;
    nightmarketEvent1.style.transform = `translate(0px, ${-1000 * scrollPercentage}%) scale(0.8)`;
    const nightmarketEvent2 = document.querySelector('#nightmarket-event-2') as HTMLElement;
    nightmarketEvent2.style.transform = `translate(0px, ${-600 * scrollPercentage}%) scale(0.8)`;
    const nightmarketEvent3 = document.querySelector('#nightmarket-event-3') as HTMLElement;
    nightmarketEvent3.style.transform = `translate(0px, ${-450 * scrollPercentage}%) scale(0.7)`;
    const nightmarketEvent4 = document.querySelector('#nightmarket-event-4') as HTMLElement;
    nightmarketEvent4.style.transform = `translate(0px, ${-300 * scrollPercentage}%) scale(0.7)`;

    // add gradient with photos
    if(window.scrollY > 1700 && window.scrollY < 2400) {
        // clear other gradients
        showcaseEventGradient.style.opacity = '0';
        nightmarketEventGradient.style.opacity = '0';

        // show halloween gradient
        halloweenEventGradient.style.transition = 'opacity 1.5s';
        halloweenEventGradient.style.opacity = '1';

        // change progress bar color
        progressBar.style.backgroundColor = 'red';

    } else if(window.scrollY > 2400 && window.scrollY < 3200) {
        halloweenEventGradient.style.opacity = '0';
        nightmarketEventGradient.style.opacity = '0';
        showcaseEventGradient.style.transition = 'opacity 1.5s';
        showcaseEventGradient.style.opacity = '1';
        progressBar.style.backgroundColor = 'blue';
    } else if(window.scrollY > 3200 && window.scrollY < 3800) {
        halloweenEventGradient.style.opacity = '0';
        showcaseEventGradient.style.opacity = '0';
        nightmarketEventGradient.style.transition = 'opacity 1.5s';
        nightmarketEventGradient.style.opacity = '1';
        progressBar.style.backgroundColor = 'white';
    } else{
        nightmarketEventGradient.style.opacity = '0';
        halloweenEventGradient.style.opacity = '0';
        showcaseEventGradient.style.opacity = '0';
        progressBar.style.backgroundColor = 'white';
    }
});

const cursor = document.querySelector('.cursor') as HTMLElement;
let cursorPosition = { x: 0, y: 0 };
cursor.style.display = 'hidden';

window.addEventListener('mousemove', function (e) {
    cursor.style.display = 'shown';
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
    elem.style.zIndex = 24;
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