(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // vendor-performance Chart
    var ctx1 = $("#vendor-performance").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["PT GIO HM", "PT HYPER", "PT MEDIATECH", "PT MENCARI", "PT CINTA", "PT SEJATI"],
            datasets: [{
                    label: "Process",
                    data: [10, 5, 3, 8, 8, 9],
                    backgroundColor: "rgba(0, 156, 255, .7)"
                },
                {
                    label: "Rejected",
                    data: [29, 35, 17, 9, 20, 22],
                    backgroundColor: "rgba(255, 0, 0, 0.5)"
                },
                {
                    label: "Done",
                    data: [95, 115, 70, 65, 135, 120],
                    backgroundColor: "rgba(0, 255, 128, 0.7)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // pic-performance Chart
    // var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    // var myChart2 = new Chart(ctx2, {
    //     type: "line",
    //     data: {
    //         labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    //         datasets: [{
    //                 label: "John Doe",
    //                 data: [15, 30, 55, 45, 70, 65, 85],
    //                 backgroundColor: "rgba(0, 156, 255, .5)",
    //                 fill: true
    //             },
    //             {
    //                 label: "Jane Doe",
    //                 data: [99, 115, 150, 130, 190, 180, 270],
    //                 backgroundColor: "rgba(0, 156, 255, .3)",
    //                 fill: true
    //             },
    //             {
    //                 label: "Zicco",
    //                 data: [130, 115, 160, 130, 200, 180, 300],
    //                 backgroundColor: "rgba(255, 0, 212, 0.3)",
    //                 fill: true
    //             },
    //             {
    //                 label: "Fahrezi",
    //                 data: [145, 90, 190, 133, 220, 200, 250],
    //                 backgroundColor: "rgba(0, 255, 98, 0.3)",
    //                 fill: true
    //             }
    //         ]
    //         },
    //     options: {
    //         responsive: true
    //     }
    // });
    

    //pic-performance Chart
    var ctx1 = $("#pic-performance").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["John Doe", "Jane Doe", "Zicco", "Fahrezi", "Saputra", "Someone"],
            datasets: [{
                    label: "Process",
                    data: [10, 5, 3, 8, 8, 9],
                    backgroundColor: "rgba(0, 156, 255, .7)"
                },
                {
                    label: "Over SLA",
                    data: [29, 35, 17, 9, 20, 22],
                    backgroundColor: "rgba(255, 0, 0, 0.5)"
                },
                {
                    label: "Done",
                    data: [95, 115, 70, 65, 135, 120],
                    backgroundColor: "rgba(0, 255, 128, 0.7)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // status Chart
    var ctx6 = $("#status-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(0, 156, 255, .3)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    
})(jQuery);

