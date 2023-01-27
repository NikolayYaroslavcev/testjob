export const  settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 5,
    speed: 500,
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 1888,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 1775,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 1148,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 725,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]

}


