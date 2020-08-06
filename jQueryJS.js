$(document).ready(function () {

    //1
    function one() {
        $("button").click(function () {
            var $textArea = $("textarea");

            $textArea.css("border", "3px solid green");
            $textArea.add("p").css("border", "3px solid red");
        });
    }

//one();


    //2
    function two() {
        $(".second-button").click(function () {
            $(".second-textarea").css("background-color", "red");
            $(".two p").css("background-color", "red");
        });

    }

//two();

    //3
    function three() {
        $("body").append("<p>some text at the end of the document body</p>");
    }

//three();

    //4
    function four() {
        $("div.two").find("p").addBack().addClass("background");
    }

    //   four();

    //5
    function five() {
        $(".five p").last().addClass(" w3r_font_color");
    }

//    five();

    function six() {
        $(".five p").last().addClass("w3r_font_color w3r_background");
    }

    //  six();

    function seven() {
        $(".six-button").click(function () {
            $("p.w3r_bg_orange").addClass('w3r_bg_red');

        })
    }

    //seven();

    function eight() {
        $("p").after("<p>this is new</p>");
    }

    //eight();

    function nine() {
        $("p").after(document.createElement("h2"));
        $("h2").append("hiii this is h2");

    }

    // nine();

    function ten() {
        $("p").after($("span"));
    }

    // ten();

    function seventeen() {
        var elementCount = $("*").length;
        console.log(elementCount);

    }

    //seventeen();

    function eighteen() {
        var division = $(".one").find("*").length;
        $("body").append("" + division + " elements found");
    }

    //eighteen();

    function nineteen() {
        $("#button-seven").click(function () {
            $("#pid").animate({
                width: "70%",
                opacity: 0.4,
                marginLeft: "0.6in",
                fontSize: "3em",
                borderWidth: "10px"
            }, 3000, function () {

            })
        })
    }

    //nineteen();

    function twenty() {
        $("#right").click(function () {
            $(".block-div").animate({
                "left": "+=50px"
            }, "linear");
        });

        $("#left").click(function () {
            $(".block-div").animate({
                "left": "-=50px"
            }, "linear");
        });
    }

    // twenty();


    function twentyone() {
        $("#run").click(function () {
            $(".block:first").animate({
                left: 400
            }, {
                duration: 3000,
                step: function (now, fx) {
                    $(".block:gt(0)").css("left", now);

                }
            });
        });

    }

    //twentyone();

    function twentytwo() {
        $("#button-nine").click(function () {
            $(".nine:animated").toggleClass("nine.colored");
        });
    }

    function animateIt() {
        $("#div1,#div2").slideToggle("slow", animateIt);
    }

    twentytwo();
    animateIt();


    function twentythree() {
        $("body p").append("<p>append text to paragraphs</p>")
    }

    //twentythree();


    function twentyfour() {
        $("p").append($("strong"))
    }

    //twentyfour();


    function twentyfive() {
        $("p").append(document.createTextNode(" hello i am a text node byee"));
    }

    // twentyfive();


    function twentysix() {
        $("span").appendTo("#myid")
    }

    twentysix();

    function twentyseven() {
        $("input")
            .change(function () {
                var $input = $(this);
                console.log(".attr( 'checked' )");
                console.log(".prop( 'checked' ): " + $input.prop("checked"));
                console.log(".is( ':checked' ): " + $input.is(":checked"));
            })
            .change();
    }

    twentyseven();


    function twentyeight() {
        var title = $("em").attr("title");
        $("#id1").text(title)
    }

    twentyeight();


    function twentynine() {
        $("a[hreflang|='de']").css("border", "3px solid pink");
    }

    twentynine();

    function thirty() {
        $("div[name*='tutorial']").css("background", "orange");
    }

    thirty();
});
