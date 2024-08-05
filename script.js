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

        // Initialize stars
        particlesJS('stars', {
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: 'img/github.svg',
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });

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
        }, sentences.length * 3000 + 2000); // Adding a delay before displaying the counter

        // Show heart after counter
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = '♥️';
            document.body.appendChild(heart);
        }, sentences.length * 3000 + 14000); // Adding a delay before displaying the heart
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
            sentence.style.animation = 'fadeInOut 3s forwards';
            setTimeout(() => {
                container.removeChild(sentence);
                displaySentences(container, sentences, index + 1);
            }, 3000);
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
    }, 12000);
}