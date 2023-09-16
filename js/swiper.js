new Swiper('.mySwiper', {
        spaceBetween: 30,

      
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.s-button-next',
        prevEl: '.s-button-prev',
  },
      
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
  speed: 800,
      loop: true,
    })