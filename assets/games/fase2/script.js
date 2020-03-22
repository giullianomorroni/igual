$( document ).ready(function() {
    console.log( "Bem vindo a FASE 2!" );

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
            $("#item1").hide();
            
            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro1'].push('verde');
        }
       
        if(itemSelected == 'item2') {
            $(this).prepend('<img src="./assets/games/fase1/items/item2.png" class="item-inside-box"/>')
            $("#item2").hide();

            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro1'].push('amarelo');
        }

        if(itemSelected == 'item3') {
            $(this).prepend('<img src="./assets/games/fase1/items/item3.png" class="item-inside-box"/>')
            $("#item3").hide();

            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro1'].push('amarelo');
        }

        if(itemSelected == 'item4') {
            $(this).prepend('<img src="./assets/games/fase1/items/item4.png" class="item-inside-box"/>')
            $("#item4").hide();
            
            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro1'].push('verde');
        }

        //Verifica se o jogo acabou
        verifyGame(matrix)

    })
    

    $(".quadro2").click(function () {
        //Se não escolheu nenhum item abaixo não avança
        if (itemSelected == null) {
            return;
        }

        //se já contiver dois elementos não adicona mais
        if (matrix['quadro2'].length >= 2) {
            return
        }

        if(itemSelected == 'item1') {
            $(this).prepend('<img src="./assets/games/fase1/items/item1.png" class="item-inside-box"/>')
            $("#item1").hide();

            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro2'].push('verde');
        }
        
        if(itemSelected == 'item2') {
            $(this).prepend('<img src="./assets/games/fase1/items/item2.png" class="item-inside-box"/>')
            $("#item2").hide();
            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro2'].push('amarelo');
        }

        if(itemSelected == 'item3') {
            $(this).prepend('<img src="./assets/games/fase1/items/item3.png" class="item-inside-box"/>')
            $("#item3").hide();

            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro2'].push('amarelo');
        }
        
        if(itemSelected == 'item4') {
            $(this).prepend('<img src="./assets/games/fase1/items/item4.png" class="item-inside-box"/>')
            $("#item4").hide();

            //adiciona valores numa variavel para manter o controle do que aconteceu
            matrix['quadro2'].push('verde');
        }

        //Verifica se o jogo acabou
        verifyGame(matrix)
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


//Aqui vc escreve as regras do jogo
function verifyGame(matrix) {
    console.log('Verificando game', matrix['quadro1'].length, matrix['quadro2'].length);

    //se todas as 4 peças foram encaixadas na sua matriz de varíaveis
    if (matrix['quadro1'].length == 2 && matrix['quadro2'].length == 2) {

        //verifica a combinação de cores
        if(matrix['quadro1'][0] == 'verde' && matrix['quadro1'][1] == 'amarelo') {
            if(matrix['quadro2'][0] == 'verde' && matrix['quadro2'][1] == 'amarelo') {
                alert('Parabéns você ganhou !')
            }
        }

        else if(matrix['quadro1'][0] == 'amarelo' && matrix['quadro1'][1] == 'verde') {
            if(matrix['quadro2'][0] == 'amarelo' && matrix['quadro2'][1] == 'verde') {
                alert('Parabéns você ganhou !')
            }
        }

        else {
            alert("Você Perdeu :(")
        }

    }
}