//@prepros-prepend "modules/header.js"
//@prepros-prepend "modules/scrollManager.js"
//@prepros-prepend "modules/popupManager.js"
//@prepros-prepend "modules/templatesManager.js"
//@prepros-prepend "modules/editor.js"
//@prepros-prepend "modules/editor-education.js"
//@prepros-prepend "modules/editor-skills.js"

$(document).ready(function () {
    
    const header = new Header();
    const scrollManager = new ScrollManager(header);

    $(".templates__slider").not(".templates__slider--small").slick({
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        prevArrow: "<div class='slider__arrow slider__arrow--prev'><i class='fas fa-chevron-left'></i></div>",
        nextArrow: "<div class='slider__arrow slider__arrow--next'><i class='fas fa-chevron-right'></i></div>",
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });
    
    $(".templates__slider--small").slick({
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        prevArrow: "<div class='slider__arrow slider__arrow--small slider__arrow--prev'><i class='fas fa-chevron-left'></i></div>",
        nextArrow: "<div class='slider__arrow slider__arrow--small slider__arrow--next'><i class='fas fa-chevron-right'></i></div>",
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $(".testimonials__slider").slick({
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        customPaging: () => {
            return "";
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    if ($(".popup").length > 0) {
        const popupManager = new PopupManager();
    }

    if ($(".select-template").length > 0) {
        const templatesManager = new TemplatesManager();
    }

    if ($(".editor").length > 0) {
        const editor = new Editor();
        const editorEducation = new EditorEducation();
        const editorSkills = new EditorSkills();
    }
    
});