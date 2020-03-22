$( document ).ready(function() {
    console.log( "ready!" );

    $(".fases").hover(
        function mouseHover() {
            $(this).addClass("fase_hover");
        }, 
        function mouseOut() {
            $(this).removeClass("fase_hover");
        }
    );

    $("#fase1").click(function() {
        window.location = "./fase1.html"
    })
    
    $("#fase2").click(function() {
        window.location = "./fase2.html"
    })
    
    $("#fase3").click(function() {
        window.location = "./fase3.html"
    })

});