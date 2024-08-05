document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');
    const title = document.querySelector('.title');
    const particles = document.getElementById('particles');
    const audio = document.getElementById('audio');

    button.addEventListener('click', () => {
        // Fade out title and button
        title.style.animation = 'fadeOut 2s forwards';
        button.style.animation = 'fadeOut 2s forwards';

        // Start playing audio
        audio.play();
        audio.volume = 0;
        fadeAudioIn(audio);

        // Fade out particles
        particles.style.animation = 'fadeOut 2s forwards';

        // Show sentences one by one
        const sentences = [
            "Hello Manal",
            "I love you",
            "You mean everything to me",
            "I made this site for you",
            "It's going to be here forever",
            "Look at how long we have been together"
        ];

        let sentenceIndex = 0;
        const container = document.querySelector('.container');
        displaySentences(container, sentences, sentenceIndex);

        // Show counter after sentences
        setTimeout(() => {
            displayCounter(container);
        }, sentences.length * 4000 + 2000); // Adding a delay before displaying the counter

        // Show heart after counter
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = '♥️';
            document.body.appendChild(heart);
        }, sentences.length * 4000 + 9000); // Adding a delay before displaying the heart
    });
});

function fadeAudioIn(audio) {
    let volume = 0;
    const fadeIn = setInterval(() => {
        if (volume >= 1) clearInterval(fadeIn);
        volume += 0.01;
        audio.volume = volume;
    }, 100);
}

function displaySentences(container, sentences, index) {
    if (index < sentences.length) {
        const sentence = document.createElement('div');
        sentence.classList.add('glow-text');
        sentence.textContent = sentences[index];
        container.appendChild(sentence);

        setTimeout(() => {
            sentence.style.animation = 'fadeInOut 4s forwards';
            setTimeout(() => {
                container.removeChild(sentence);
                displaySentences(container, sentences, index + 1);
            }, 4000);
        }, 2000);
    }
}

function displayCounter(container) {
    const startDate = new Date('2024-04-13');
    const today = new Date();
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    const counter = document.createElement('div');
    counter.classList.add('glow-text');
    counter.textContent = `${daysDiff} days since April 13, 2024`;
    container.appendChild(counter);

    setTimeout(() => {
        counter.style.animation = 'fadeOut 2s forwards';
        setTimeout(() => {
            container.removeChild(counter);
        }, 2000);
    }, 10000);
}