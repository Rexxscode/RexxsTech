AOS.init({
    duration: 800, // Duration of animations
    easing: 'ease-in-out', // Easing function for animations
    once: true // Whether animation should happen only once - while scrolling down
});

AOS.init(); // Inisialisasi AOS
        
        // Menambahkan efek scroll untuk navbar
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.navbar-custom').addClass('scrolled');
            } else {
                $('.navbar-custom').removeClass('scrolled');
            }
        });

 // Mendapatkan elemen slider
 const sliderContainer = document.querySelector('.slider-container');

 // Variabel untuk mengontrol pergerakan otomatis
 let sliderInterval;
 
 // Fungsi untuk memulai slider otomatis
 function startSlider() {
     sliderInterval = setInterval(() => {
         const firstItem = sliderContainer.querySelector('.slider-item:first-child');
         sliderContainer.appendChild(firstItem);
     }, 2000); // Setiap 2 detik slider akan bergeser
 }
 
 // Fungsi untuk menghentikan slider otomatis
 function stopSlider() {
     clearInterval(sliderInterval);
 }
 
 // Memulai animasi slider secara otomatis
 startSlider();
 
 // Menambahkan event listener untuk berhenti saat mouse hover dan melanjutkan saat mouse keluar
 sliderContainer.addEventListener('mouseenter', stopSlider);  // Hentikan saat mouse di atas
 sliderContainer.addEventListener('mouseleave', startSlider);  // Lanjutkan saat mouse keluar
 

     var typed = new Typed('#typed-profession', {
       strings: ["FRONTEND DEVELOPER","CONTENT CREATOR", "DESIGNER", "ILLUSTRATOR", "GAMER", "ARCHITECT", "VIDEO EDITOR", "BLOGGER","CALCER"],
       typeSpeed: 50,
       backSpeed: 50,
       backDelay: 2000,
       loop: true
     });

     document.addEventListener('DOMContentLoaded', function() {
        gsap.registerPlugin(ScrollTrigger);
    
        // Animasi scroll untuk timeline item
        gsap.from('.timeline-item', {
            scrollTrigger: {
                trigger: '.timeline-item',
                start: 'top 80%', // When the item enters 80% from the top of the viewport
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: -100,
            duration: 1.2,
            stagger: 0.3, // Delay between each item animation
            ease: 'power2.out',
        });
    
        // Animasi hover untuk efek 3D pada setiap item
        const items = document.querySelectorAll('.timeline-item');
        items.forEach(item => {
            item.addEventListener('mouseenter', function() {
                gsap.to(item, {
                    scale: 1.1,
                    rotationY: 15,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            });
    
            item.addEventListener('mouseleave', function() {
                gsap.to(item, {
                    scale: 1,
                    rotationY: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            });
        });
    
        // Parallax effect on background
        gsap.to('.education-section', {
            backgroundPosition: "50% 100%",
            scrollTrigger: {
                trigger: '.education-section',
                start: 'top bottom',
                scrub: true // Smooth parallax scrolling effect
            }
        });
    });
    

    const canvas = document.getElementById("animatedBackground");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particlesArray = [];
const numberOfParticles = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = "#00d9ff";
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();
