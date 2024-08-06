let pageSlider = new Swiper('.page', {
    wrapperClass: "page_wrapper",
    slideClass: "fullscreen",
    direction: "vertical",
    slidesPerView: "auto",
    parallax: "true",
    keyboard:{
        enable: true,
        onlyViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        watchOverflow: true,
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    },
    pagination:{
        el: '.page_pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page_bullet",
        bulletActiveClass: "page_bullet_active",
    },
    scrollbar:{
        el: '.page_scroll',
        dragClass: "page_drag-scroll",
        draggable: true,
    },
    on: {
        slideChange: function () {
            let bullets = document.querySelectorAll('.page_bullet');
            bullets.forEach(bullet => {
                bullet.classList.remove('page_bullet_active');
            });
            bullets[this.activeIndex].classList.add('page_bullet_active');
        },
    },
})
