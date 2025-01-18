

document.addEventListener("DOMContentLoaded", () => {

    const hiddenImage = document.querySelector('.image-hidden');
    const heroImage = document.querySelector('.hero-image');
    if (hiddenImage) {
        const rect = hiddenImage.getBoundingClientRect();

        gsap.to(heroImage, {
            duration: 2,
            delay: .5,
            width: rect.width,
            height: rect.height,
            borderRadius: '8px',
            x: rect.left - heroImage.getBoundingClientRect().left,
            y: rect.top - heroImage.getBoundingClientRect().top,
            ease: "power2.out"
        });



        gsap.fromTo(
            '.text-large',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 3
            }
        );

        gsap.fromTo(
            'h1',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 2.5
            }
        );

    } else {
        gsap.fromTo(
            'h1',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: .5
            }
        );

        gsap.fromTo(
            '.swiper-container',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 1
            }
        );

    }





    const slides = document.querySelectorAll(".swiper-slide img");

    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            if (!slide.classList.contains('expanding')) {
                document.querySelectorAll('.swiper-control').forEach((el) => {
                    el.style.display = 'none';
                })
                slide.parentElement.style.overflow = 'visible'
                slide.parentElement.style.zIndex = 999
                swiper.autoplay.stop(); 

                const rect = slide.getBoundingClientRect();

                const scaleX = window.innerWidth / rect.width;
                const scaleY = window.innerHeight / rect.height;

                const scale = Math.max(scaleX, scaleY);

                // slide.classList.add("expanding");

                gsap.set(slide, {
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    borderRadius: "initial",
                    transformOrigin: "center center",
                });

                gsap.to(slide, {
                    duration: 0.5,
                    ease: "expo.out",
                    x: -(rect.left - (window.innerWidth - rect.width) / 2),
                    y: -(rect.top - (window.innerHeight - rect.height) / 2),
                    scaleX: scale,
                    scaleY: scale,
                    borderRadius: 0,
                    transformOrigin: "center center",
                    onComplete: () => {
                        setTimeout(() => {
                            loadPageContent(slide);
                        }, 1500);
                    },
                });
            }
        });
    });

    function loadPageContent(slide) {
        const url = slide.getAttribute("data-url");
        window.location.href = url;
    }


});
