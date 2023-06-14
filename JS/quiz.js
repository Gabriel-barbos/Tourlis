const questoes = [
    {
        pergunta: 'Qual é a definição de desenvolvimento sustentável?',
        respostas: ['Uso consciente e equilibrado dos recursos naturais para atender às necessidades presentes sem comprometer as gerações futuras.', 'Crescimento econômico rápido sem levar em consideração o impacto ambiental.', 'Conservação do meio ambiente sem levar em consideração as necessidades humanas.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'Qual dos seguintes não é um dos três pilares do desenvolvimento sustentável?',
        respostas: ['A Sustentabilidade social.', 'Sustentabilidade econômica.', 'Sustentabilidade individual.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que significa a sigla "ODS" relacionada ao desenvolvimento sustentável?',
        respostas: ['Objetivos de Desenvolvimento Social.', 'Objetivos de Desenvolvimento Sustentável.', 'Objetivos de Desenvolvimento Sustentado.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'Qual dos seguintes é um exemplo de energia renovável?',
        respostas: ['Carvão.', 'Petróleo.', 'Energia solar.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é o efeito estufa?',
        respostas: ['Aumento das temperaturas globais devido ao aumento de gases poluentes na atmosfera.', 'O resfriamento da Terra causado por poluentes na atmosfera.', 'O processo de renovação da camada de ozônio.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é reciclagem?',
        respostas: ['A transformação de resíduos em novos produtos.', 'O descarte de resíduos em aterros sanitários.', 'A queima de resíduos para geração de energia.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'Qual das seguintes ações ajuda a reduzir a pegada de carbono?',
        respostas: ['Uso de transporte público em vez de carros particulares.', ' Desperdício de alimentos.', 'Uso excessivo de energia elétrica.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é a degradação do solo',
        respostas: ['A perda de camada fértil do solo devido à má utilização.', 'O crescimento saudável de plantas e árvores no solo.', ' O aumento da fertilidade do solo ao longo do tempo.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'Qual das seguintes é uma maneira de conservar a água?',
        respostas: [' Deixar a torneira aberta enquanto escova os dentes.', 'Utilizar sistemas de irrigação ineficientes.', 'Coletar água da chuva para reutilização.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'Quais são as três "R" da sustentabilidade?',
        respostas: [' Reduzir, Reutilizar, Reciclar.', 'Reparar, Refazer, Reproduzir.', 'Reter, Renovar, Remover.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'Qual dos seguintes não é um dos princípios dos 5 "R" da sustentabilidade?',
        respostas: ['Repensar.', 'Recusar.', 'Reduzir.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é desmatamento?',
        respostas: ['O plantio de árvores em áreas urbanas.', 'A remoção ou destruição de florestas.', 'O processo de transformar terras áridas em áreas férteis.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que significa a sigla "PNRS" relacionada ao desenvolvimento sustentável?',
        respostas: [' Política Nacional de Recursos Sustentáveis.', 'Plano Nacional de Reciclagem Sustentável.', 'Política Nacional de Resíduos Sólidos.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é a biodiversidade?',
        respostas: ['A variedade de formas de vida em um determinado ecossistema.', 'A presença de apenas uma espécie em um ecossistema.', 'A reprodução de animais em risco de extinção.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é o consumo consciente?',
        respostas: ['O consumo excessivo de recursos naturais.', 'A compra de produtos sem considerar seu impacto ambiental.', 'O ato de consumir de forma responsável, levando em consideração os impactos sociais e ambientais dos produtos.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é poluição do ar?',
        respostas: ['A contaminação de rios e oceanos por produtos químicos.', 'A emissão de gases e partículas nocivas na atmosfera.', 'O descarte inadequado de resíduos sólidos.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'Qual dos seguintes é um exemplo de prática sustentável na agricultura?',
        respostas: ['Uso indiscriminado de agrotóxicos.', 'Rotação de culturas para preservar a fertilidade do solo.', 'Desmatamento para expansão das áreas de plantio.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é eficiência energética?',
        respostas: ['O uso intensivo de energia em processos industriais.', 'O desperdício de energia em sistemas de iluminação.', 'O uso racional e eficiente da energia, reduzindo o consumo e maximizando a produção.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que são energias renováveis?',
        respostas: ['Fontes de energia que são utilizadas apenas em países em desenvolvimento.', 'Fontes de energia que são inesgotáveis e não causam danos ao meio ambiente.', 'Fontes de energia provenientes de combustíveis fósseis.'],
        correta: 1, 
        acertou: false
    },
    {
        pergunta: 'O que é sustentabilidade corporativa?',
        respostas: [' A busca pelo lucro máximo sem levar em consideração os impactos ambientais.', 'A responsabilidade das empresas em adotar práticas sustentáveis em suas operações.', 'A exclusão das empresas do mercado que não adotam práticas sustentáveis.'],
        correta: 1, 
        acertou: false
    },
]

const areaPergunta = document.querySelector('#area-pergunta');
const areaRespostas = document.querySelector('#area-respostas');

function limparAreaRespostas() {
    areaRespostas.innerHTML = '';
}

let nivelAtual = 1;
let acertos = 0;


function carregarPergunta(){
    limparAreaRespostas();

    let questao = questoes[nivelAtual - 1];

    areaPergunta.innerText = questao.pergunta;

    for(let resposta in questao.respostas){
        let botao = document.createElement('button');
        botao.classList.add('resposta');
        botao.innerText = questao.respostas[resposta];
        areaRespostas.appendChild(botao);

        botao.setAttribute('data-resposta', (+resposta + 1));

        botao.addEventListener('click', (e) => {
            const thisBotao = e.target;
            let respostaSelecionada = thisBotao.getAttribute('data-resposta');
            responder(respostaSelecionada);
        })
    }
}

window.onload = () => {
    carregarPergunta();
}

function responder(opcao) {
    let questaoAtual = questoes[nivelAtual - 1];
    let correta = questaoAtual.correta;

    if(opcao == correta){
        questaoAtual.acertou = true;
        acertos+=1;
    }

    nivelAtual+=1;

    if(nivelAtual == questoes.length + 1){
        return mostrarPontuacao();
    }

    carregarPergunta();
}

const questionsArea = document.querySelector('.questions-area');

function mostrarPontuacao() {
    questionsArea.innerHTML = '';

    for(let questao of questoes){
        let div = document.createElement('div');
        div.innerHTML = `
            <br />
            <h3>Questão: ${questao.pergunta}</h3>
            <p>Resposta: ${questao.respostas[questao.correta - 1]}</p>
        `

        if(questao.acertou){
            div.classList.add('acertou')
        } else{
            div.classList.add('errou')
        }

        questionsArea.appendChild(div);
    }

    let pontuacao = document.createElement('div');
    pontuacao.innerHTML = `
    <h2>Acertos: ${acertos}</h2>
    <h2>Erros: ${questoes.length - acertos}</h2>
    `

    questionsArea.appendChild(pontuacao);

}