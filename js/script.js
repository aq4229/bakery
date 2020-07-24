$(document).ready(function() {
    $(window).scroll(function(event) {
        if (this.scrollY > 20) {
            $(".navbar1").addClass("sticky");

        } else {
            $(".navbar1").removeClass("sticky");
        }

        if (this.scrollY > 40) {
            var scrollYx = event.scrollY;
            console.log(scrollYx);
            // $(".stickeypostion").css({ "margin-top": "scrollY+=75px" });
        }

    });




    $('.menu-toggler').click(function() {

        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
    // alert('jhgjhg');
    // rs - layer - wrap: nth - child(2)

    $("#sec").mouseenter(function() {

        $("#sec").mousemove(function(event) {
            var left = event.pageX / 45 + 'px';
            var top = event.pageY / 45 + 'px';
            var topp = event.pageX / 25 + 'px';
            var topbutton = event.pageX / 10 + 'px';

            // $(".seco").css("transform", "translateX(" + left + ")");
            // $(".seco>h1").css("transform", "translate(" + toph1 + " , " + tophp + ")");
            // $(".seco>p").css("transform", "translateX(" + topp + ")");
            $(" .seco>h1, .seco>p, .seco>button").css({ "transform": "translate(" + left + " , " + top + ")" });
            // var msg = "Handler for .mousemove() called at ";
            // msg += event.pageX + ", " + event.pageY;
            // $("#log").append("<div>" + msg + "</div>");
            // $(".seco>p").css("transform", "translate(event.pageX / 70, event.pageY / 70");
            console.log(left + ", " + top);

        });

    });
    $("#sec").mouseleave(function() {


        $(".seco>h1, .seco>p , .seco>button").css("transform", "translate(0px , 0px)");


        // $(".seco>h1").css("transform", "translateX(0)");
        // $(".seco>p").css("transform", "translateX(0)");
        // $(".seco>button").css("transform", "translateX(0)");
        // $(".seco").css("background", "transparent");
    });

    $(window).scroll(function(event) {

        console.log(event.scrollY);

    });

    $(".slider").mouseenter(function() {
        setTimeout(() => {
            $(".item_sub1").css({ "top": "0px", "left": "62px" });
            $(".item_sub2").css({ "top": "-129px", "left": "49.7%" });
            $(".item_sub3").css({ "top": "0px", "right": "0px" });
            $(".item_sub4").css({
                "top": "50%",
                "left": "0px",
                "transform": "translateY(-50%)"
            });
            $(".item_sub5").css({
                "top": "50%",
                "right": "0px",
                "transform": "translateY(-50%)"
            });
        }, 1000);

    });




    // $(".works").magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     gallery: { enabled: true }
    // });


    // $(window).scroll(function() {
    //     if (this.scrollY > 20) {
    //         $('.seco').addClass('sticky');
    //     }
    // });

});