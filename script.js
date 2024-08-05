const messages = [
    "Hello Manal",
    "I love you",
    "You mean everything to me",
    "I made this site for you",
    "It's going to be here forever",
    "Look at how long we have been together"
];

const displayDuration = 4000; // 4 seconds
const fadeDuration = 1000; // 1 second

function begin() {
    document.getElementById('welcome').style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('rose-container').style.display = 'block';
        document.getElementById('rose-container').style.animation = 'fadeIn 2s forwards';
        document.getElementById('background-audio').volume = 0;
        document.getElementById('background-audio').play();
        fadeInAudio();
        showMessages();
    }, 1000);
}

function fadeInAudio() {
    const audio = document.getElementById('background-audio');
    let volume = 0;
    const interval = setInterval(() => {
        if (volume < 1) {
            volume += 0.01;
            audio.volume = volume;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function showMessages() {
    let index = 0;
    const messageElement = document.getElementById(`msg${index + 1}`);
    messageElement.style.display = 'block';
    messageElement.style.animation = `fadeIn ${fadeDuration}ms forwards`;
    
    const interval = setInterval(() => {
        messageElement.style.animation = `fadeOut ${fadeDuration}ms forwards`;
        setTimeout(() => {
            messageElement.style.display = 'none';
            index++;
            if (index < messages.length) {
                const nextMessageElement = document.getElementById(`msg${index + 1}`);
                nextMessageElement.style.display = 'block';
                nextMessageElement.style.animation = `fadeIn ${fadeDuration}ms forwards`;
                if (index === messages.length - 1) {
                    showCounter();
                }
            } else {
                clearInterval(interval);
                showHeart();
            }
        }, fadeDuration);
    }, displayDuration);
}

function showCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.style.display = 'block';
    counterElement.innerText = calculateDaysFrom("2024-04-13");
    counterElement.style.animation = `fadeIn ${fadeDuration}ms forwards`;
}

function showHeart() {
    const heartElement = document.getElementById('heart');
    heartElement.style.display = 'block';
    heartElement.style.animation = `fadeIn ${fadeDuration}ms forwards`;
}

function calculateDaysFrom(dateString) {
    const startDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return `${daysDifference} days`;
}