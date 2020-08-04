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

    // eighteen();

});