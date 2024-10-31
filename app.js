function sortear(){

    // Eu quero guardar não o INPUT,mas sim o valor dentro desse input "quantidade"
    // Pegando os elementos do HTML
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Declarando os botoes
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');
    // Verificando ser o botao sortear está desabilitado
    let statusBotaoSortearDesabilitado = consultaStatusBotao(botaoSortear);

// Se o botao sortear estiver desabilitado eu falo pra pessoa reiniciar!
  if(statusBotaoSortearDesabilitado == true){

    //  Aqui eu aviso para a pessoa reiniciar o jogo
        document.getElementById('resultado').innerHTML ='<label class="texto__paragrafo">Números sorteados: Você já sorteou, reinicie o jogo!</label>';
  }

    // Se o botao sortear estiver habilitado eu deixo ela sortear
  else {


        // Verificação antes de começar o sorteio 

        if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
        }


        //É por esse motivo que fazemos a verificação se a quantidade é maior que o cálculo (até - de + 1),
        // pois se fosse igual ou inferior não apresentaria o erro de loop infinito.

        if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
        }

        // AQUI INICIA O PROCESSO DO SORTEIO
        // Array que guarda os números sorteados
        let sorteados = [];
        // Declaração do numero que será sorteado
        let numero

      
        for (let i = 0; i< quantidade; i++){
            numero = obterNumeroAleatorio(de,ate);
    
            while(sorteados.includes(numero)){
   
                numero = obterNumeroAleatorio(de,ate);
               
            }
    
            // Empurro para os sorteados o numero que usei na conta aqui em cima.
            sorteados.push(numero);
        }


        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`

    
        // Altero o status dos botões no final, pra pessoa só poder sortear uma única vez
        alterarStatusBotao(botaoReiniciar);
        alterarStatusBotao(botaoSortear);

    }
}

function obterNumeroAleatorio(min,max){
    // Retorna os valores aleatórios
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function consultaStatusBotao(botao){

    if (botao.classList.contains('container__botao-desabilitado')){
        return true
    }
    else {
        return false
    }
}


function alterarStatusBotao(botao){
    
    // Se o botão está desabilidato, ele passa a ser habilitado
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    // Se o botão está habilitado, ele passa a ser desabilitado
    else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}
function reiniciar(){

    // Perceba que aqui eu fui forçada a declarar novamente a var botão de reiniciar 
    // Vc pode arrumar isso depois
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    // Fui forçada a declarar o botao de sorteio 
    let botaoSortear = document.getElementById('btn-sortear');

    // Aqui eu deixo os campos vazios
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML ='<label class="texto__paragrafo">Números sorteados: nenhum ate agora</label>';
    
    // Alterando novamente o status dos botoes
    alterarStatusBotao(botaoReiniciar);
    alterarStatusBotao(botaoSortear);

}