$( document ).ready(function() {
    console.log( "Arquivo Commom importado e inicializado" );

    $(".button_home").click(() => {
        window.location = "./index.html";
    })

    $(".button_restart").click(() => {
        window.location.reload();
    })
});