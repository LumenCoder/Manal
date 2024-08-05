document.addEventListener('DOMContentLoaded', () => {
    const beginBtn = document.getElementById('begin-btn');
    const title = document.getElementById('title');
    const container = document.querySelector('.container');
    const animTexts = document.querySelectorAll('.anim-text');
    const counter = document.getElementById('counter');
    const heart = document.getElementById('heart');
    const audio = document.getElementById('background-audio');

    beginBtn.addEventListener('click', () => {
        // Fade out title and button
        title.style.transition = 'opacity 2s';
        beginBtn.style.transition = 'opacity 2s';
        title.style.opacity = 0;
        beginBtn.style.opacity = 0;

        setTimeout(() => {
            title.style.display = 'none';
            beginBtn.style.display = 'none';
            document.body.classList.add('blur-removed');
            
            // Play the audio
            audio.volume = 0;
            audio.play();
            fadeInAudio(audio, 5); // 5 seconds fade in

            // Show and animate text
            showAnimationTexts(animTexts);
        }, 2000); // Wait for fade out

    });

    function fadeInAudio(audio, duration) {
        let step = 0.05 / duration;
        let volume = 0;
        let interval = setInterval(() => {
            if (volume < 1) {
                volume += step;
                audio.volume = volume;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }

    function showAnimationTexts(texts) {
        let delay = 0;
        texts.forEach((text, index) => {
            setTimeout(() => {
                text.style.display = 'block';
                text.style.animation = `fadeInOut 4s forwards`;
                if (index === 5) { // For the counter
                    setTimeout(() => showCounter(), 4000);
                }
            }, delay);
            delay += 4000; // 4 seconds for each text
        });
    }

    function showCounter() {
        const startDate = new Date('April 13, 2024');
        const now = new Date();
        const days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
        counter.textContent = `${days} days`;
        counter.style.display = 'block';
        counter.style.animation = 'fadeInOut 4s forwards';
        setTimeout(() => {
            // Show heart after the counter
            heart.style.display = 'block';
            heart.style.animation = 'fadeInHeart 3s forwards';
        }, 9000); // Wait for 4 seconds fade in + 5 seconds display
    }
});