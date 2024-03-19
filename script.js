const perguntas = [
    {
      pergunta: "Qual método é usado para adicionar um item ao final de um array?",
      respostas: [
        "unshift()",
        "push()",
        "pop()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável que NÃO muda seu valor ao longo do tempo?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual objeto em JavaScript pode ser usado para trabalhar com datas?",
      respostas: [
        "Date",
        "Time",
        "Clock",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade de valor E tipo?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Como é feita uma declaração de função em JavaScript?",
      respostas: [
        "function: minhaFuncao()",
        "function minhaFuncao()",
        "function = minhaFuncao()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método remove o último elemento de um array?",
      respostas: [
        "slice()",
        "pop()",
        "push()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você pode converter um string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "Number()",
        "Ambas as respostas anteriores",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o uso do método 'forEach' em um array?",
      respostas: [
        "Para somar todos os elementos",
        "Para executar uma função em cada item do array",
        "Para filtrar elementos baseado em uma condição",
      ],
      correta: 1
    },
    {
      pergunta: "Como você cria um objeto em JavaScript?",
      respostas: [
        "{}",
        "[]",
        "()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável com escopo de bloco?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1
    },
  ];
  
const quiz = document.querySelector('#quiz') // Seleciona o elemento com o id "quiz" e armazena na variável "quiz"
const templante = document.querySelector('template') // Seleciona o elemento "template" e armazena na variável "templante"
const quizItem = templante.content.cloneNode(true) // Clona o conteúdo do elemento "template" e armazena na variável "quizItem"

// Laço de repetição
for(const item of perguntas) { // Para cada item no array "perguntas"
    const quizItem = templante.content.cloneNode(true) // Clona o conteúdo do elemento "template" e armazena na variável "quizItem"
    quizItem.querySelector('h3').textContent = item.pergunta // Define o texto do elemento "h3" dentro de "quizItem" como a pergunta do item atual
    
    for(let respostas of item.respostas) { // Para cada resposta no array de respostas do item atual
        const dt = quizItem.querySelector('dl dt').cloneNode(true) // Clona o elemento "dt" dentro de "quizItem" e armazena na variável "dt"
        dt.querySelector('span').textContent = respostas // Define o texto do elemento "span" dentro de "dt" como a resposta atual
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item)) // Define o atributo "name" do elemento "input" dentro de "dt" como 'pergunta-' + o índice do item atual
        dt.querySelector('input').setAttribute('value',item.respostas.indexOf(respostas)) // Define o atributo "value" do elemento "input" dentro de "dt" como o índice da resposta atual
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta // Verifica se o valor do elemento "input" que disparou o evento "change" é igual ao índice da resposta correta
            if(estaCorreta) {
                alert('Correta!') // Se a resposta estiver correta, exibe um alerta com o texto "Correta!"
            }
            else {
                alert('Incorreta!') // Se a resposta estiver incorreta, exibe um alerta com o texto "Incorreta!"
            }
    }


        quizItem.querySelector('dl').appendChild(dt) // Adiciona o elemento "dt" ao elemento "dl" dentro de "quizItem"
    }
    
    quizItem.querySelector('dl dt').remove() // Remove o primeiro elemento "dt" dentro de "quizItem"
    
    // colocar a pergunta no quiz
    quiz.appendChild(quizItem) // Adiciona o elemento "quizItem" ao elemento "quiz"
}