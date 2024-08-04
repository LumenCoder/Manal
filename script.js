document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const title = document.getElementById('title');
    const button = document.getElementById('begin-button');
    const rose = document.getElementById('rose');
    const audio = document.getElementById('background-music');
    const particleBackground = document.getElementById('particle-background');

    // Particles.js configuration
    particlesJS('particle-background', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Apply initial blur
    particleBackground.classList.add('intense-blur');

    button.addEventListener('click', () => {
        title.style.animation = 'fadeOut 1s forwards';
        button.style.animation = 'fadeOut 1s forwards';

        setTimeout(() => {
            overlay.style.display = 'none';
            particleBackground.classList.remove('intense-blur');
            particleBackground.classList.add('blur');
        }, 1000);

        // Fade in music
        audio.volume = 0;
        audio.play();
        let volume = 0;
        const fadeAudioIn = setInterval(() => {
            if (volume < 1) {
                volume += 0.01;
                audio.volume = volume;
            } else {
                clearInterval(fadeAudioIn);
            }
        }, 50);

        // Show rose
        setTimeout(() => {
            rose.style.animation = 'roseGrow 3s forwards';
        }, 1000);
    });
});
