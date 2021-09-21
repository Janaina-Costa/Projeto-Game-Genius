let ordemJogo = []
let ordemClick = []
let pontos = 0

/*cores
0 - verde
1 - vermelho
2 - amarelo
3 - azul */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//sorteando as cores

let ordemRandomica = ()=>{
    let ordemCores = Math.floor(Math.random()*4)

    ordemJogo[ordemJogo.length] = ordemCores

    ordemClick=[]

    for(let i in ordemJogo){
        let elementoCor = criarElementoCor(ordemJogo[i])
        acendeCor(elementoCor, Number(i) + 1)//a cada nivel soma uma cor a mais na rodada
    }
}

//acender a cor  sorteada

let acendeCor = (elemento, numero)=>{
    numero = numero * 500

    setTimeout(()=>{
        elemento.classList.add('selected')
    }, numero - 150);

    setTimeout(()=>{
        elemento.classList.remove('selected')
    }, numero - 450);
}

//checando os botões do jogador e comparando com o jogo

let checarOrdem = ()=>{

    for(let i in ordemClick){
        if(ordemClick[i] != ordemJogo[i]){
            gameOver()
            break
        }
    }
        if(ordemClick.length == ordemJogo.length){
            alert(`PONTUAÇÃO: ${pontos}\n Você Acertou!!\n Vamos ao próximo nível`)

            if(pontos === 10){
                alert(`PONTUAÇÃO: ${pontos}\n Tá voando baixo hein!!!`)
            }

            if(pontos === 20){
                alert(`PONTUAÇÃO: ${pontos}\n Tem certeza de que você é deste planeta???!!!`)
            }
            proximoNivel()
        }
    
}


//Clique do jogador

let clicando = (cor)=>{
    ordemClick[ordemClick.length] = cor
    criarElementoCor(cor).classList.add('selected')

    setTimeout(()=>{
        criarElementoCor(cor).classList.remove('selected')

        checarOrdem()
    },250)
}

//Retornando a cor selecionada

let criarElementoCor = (cor)=>{
    if(cor ===- 0){
        return green
    }else if(cor === 1){
        return red
    }else if(cor === 2){
        return yellow
    }else if(cor === 3){
        return blue
    }
}

//seguindo para o proximo nivel

let proximoNivel= () =>{
    pontos++
    ordemRandomica()
}

//game over

let gameOver = ()=>{
    alert(`PONTUAÇÃO: ${pontos}\n Você perdeu :(\n...Aperte OK para recomeçar`)
    ordemClick=[]
    ordemJogo = []
    clearTimeout(clicando)
    
    playGame()
}

//iniciar jogo

let playGame = ()=>{
    alert('Muito bem vindo ao salão retrô!!!\n Este é o Genius\n Are you read??!!')
    pontos = 0

    proximoNivel()
}

//clique das cores

green.onclick = ()=> clicando(0)
red.onclick = ()=> clicando(1)
yellow.onclick = ()=> clicando(2)
blue.onclick = ()=> clicando(3)


//Inicio do jogo

playGame()