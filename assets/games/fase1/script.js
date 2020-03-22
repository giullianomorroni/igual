$( document ).ready(function() {
    console.log( "Bem vindo a FASE 1!" );

    //Variaveis de controle
    let itemSelected = null;

    let matrix = {
        'quadro1': [],
        'quadro2': []
    }

    $(".quadro1").click(function () {
        
        //Se não escolheu nenhum item abaixo não avança
        if (itemSelected == null) {
            return;
        }

        //se já contiver dois elementos não adicona mais
        if (matrix['quadro1'].length >= 2) {
            return
        }

        if(itemSelected == 'item1') {
            $(this).prepend('<img src="./assets/games/fase1/items/item1.png" class="item-inside-box"/>')
            matrix['quadro1'].push('item1');
        }
        if(itemSelected == 'item2') {
            $(this).prepend('<img src="./assets/games/fase1/items/item2.png" class="item-inside-box"/>')
            matrix['quadro1'].push('item2');
        }
        if(itemSelected == 'item3') {
            $(this).prepend('<img src="./assets/games/fase1/items/item3.png" class="item-inside-box"/>')
            matrix['quadro1'].push('item3');
        }
        if(itemSelected == 'item4') {
            $(this).prepend('<img src="./assets/games/fase1/items/item4.png" class="item-inside-box"/>')
            matrix['quadro1'].push('item4');
        }
    })
    

    $(".quadro2").click(function () {
        //Se não escolheu nenhum item abaixo não avança
        if (itemSelected == null) {
            return;
        }

        //se já contiver dois elementos não adicona mais
        if (matrix['quadro1'].length >= 2) {
            return
        }

        
        if(itemSelected == 'item1') {
            $(this).prepend('<img src="./assets/games/fase1/items/item1.png" class="item-inside-box"/>')
            matrix['quadro2'].push('item1');
        }
        if(itemSelected == 'item2') {
            $(this).prepend('<img src="./assets/games/fase1/items/item2.png" class="item-inside-box"/>')
            matrix['quadro2'].push('item2');
        }
        if(itemSelected == 'item3') {
            $(this).prepend('<img src="./assets/games/fase1/items/item3.png" class="item-inside-box"/>')
            matrix['quadro2'].push('item3');
        }
        if(itemSelected == 'item4') {
            $(this).prepend('<img src="./assets/games/fase1/items/item4.png" class="item-inside-box"/>')
            matrix['quadro2'].push('item4');
        }
    })

    $("#item1").click(function () {
        if ($(this).hasClass("item-selected")) {
            $(this).removeClass("item-selected");
        } else {
            $(this).addClass("item-selected");
            itemSelected = "item1"
        }
    })

    $("#item2").click(function () {
        if ($(this).hasClass("item-selected")) {
            $(this).removeClass("item-selected");
        } else {
            $(this).addClass("item-selected");
            itemSelected = "item2"
        }
    })

    $("#item3").click(function () {
        if ($(this).hasClass("item-selected")) {
            $(this).removeClass("item-selected");
        } else {
            $(this).addClass("item-selected");
            itemSelected = "item3"
        }
    })

    $("#item4").click(function () {
        if ($(this).hasClass("item-selected")) {
            $(this).removeClass("item-selected");
        } else {
            $(this).addClass("item-selected");
            itemSelected = "item4"
        }
    })

});