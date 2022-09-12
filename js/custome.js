// star part slick js
$('.star_main').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    centerPadding: '60px',
    prevArrow:".prev",
    nextArrow:".next",
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    });


// take part
$('.take').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    centerPadding: '60px',
    centerPadding: '60px',
    prevArrow:".prv",
    nextArrow:".nxt",
    
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    });