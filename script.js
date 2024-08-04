window.onload = () => {
    const title = document.getElementById('title');
    const button = document.getElementById('beginBtn');
    const overlay = document.querySelector('.overlay');
    const bgAudio = document.getElementById('bgAudio');
    const roseCanvas = document.getElementById('roseCanvas');
    const particleCanvas = document.getElementById('particleCanvas');
    const ctx = particleCanvas.getContext('2d');
    const roseCtx = roseCanvas.getContext('2d');

    // Fade in title and button
    setTimeout(() => {
        title.classList.add('fade-in');
        button.classList.add('fade-in');
    }, 500);

    button.onclick = () => {
        // Fade out title and button
        title.classList.remove('fade-in');
        button.classList.remove('fade-in');
        setTimeout(() => {
            overlay.style.backdropFilter = 'blur(0)';
            overlay.style.display = 'none';
            roseCanvas.style.display = 'block';
            bgAudio.play();
            drawRose();
        }, 1000);

        // Fade in audio
        bgAudio.volume = 0;
        const fadeAudio = setInterval(() => {
            if (bgAudio.volume < 1.0) {
                bgAudio.volume += 0.05;
            } else {
                clearInterval(fadeAudio);
            }
        }, 200);
    };

    // Particle animation
    const particles = [];
    const numParticles = 100;

    function Particle() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;
        this.radius = Math.random() * 2;
        this.color = `rgba(255, 255, 255, ${Math.random()})`;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        };

        this.update = function() {
            if (this.x + this.radius > particleCanvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > particleCanvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };
    }

    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        particles.forEach(particle => particle.update());
    }

    function drawRose() {
        const centerX = roseCanvas.width / 2;
        const centerY = roseCanvas.height / 2;
        const numPetals = 100;
        const roseRadius = 150;

        for (let i = 0; i < numPetals; i++) {
            const angle = i * 2 * Math.PI / numPetals;
            const radius = roseRadius * Math.sin(angle * 4);
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            roseCtx.beginPath();
            roseCtx.arc(x, y, 5, 0, 2 * Math.PI, false);
            roseCtx.fillStyle = 'white';
            roseCtx.fill();
            roseCtx.closePath();
        }
    }

    window.onresize = () => {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
        roseCanvas.width = window.innerWidth;
        roseCanvas.height = window.innerHeight;
    };

    window.onresize();
    animateParticles();
};
