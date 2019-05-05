var acerto = 0,
    nivel = 0;
function createDiv() {
    //divs principais...
    let div = document.createElement('div');
    div.setAttribute('class', 'conteiner');
    div.setAttribute('id', 'conteiner');
    document.body.appendChild(div);
    createQuadro();
}
var vetor1 = [];
var vetor2 = [];
var vetor3 = [];
//vetor para guardar os numeros que foram gerados...
function pergunta() {
    let num = Math.floor(Math.random() * 8);
    //gera numero aleatorio...
    if (acerto <= 3) {
        nivel = 1;
        if (vetor1.indexOf(num) == -1) {
            switch (num) {
                case 0:
                    this.pergunta = ' 1 + 1 ';
                    this.resposta = 2;
                    vetor1.push(num);
                    break;
                case 1:
                    this.pergunta = ' 2 + 2 ';
                    this.resposta = 4;
                    vetor1.push(num);
                    break;
                case 2:
                    this.pergunta = ' 3 + 3 ';
                    this.resposta = 6;
                    vetor1.push(num);
                    break;
                case 3:
                    this.pergunta = ' 3 + 4 ';
                    this.resposta = 7;
                    vetor1.push(num);
                    break;
                case 4:
                    this.pergunta = ' 3 + 5 ';
                    this.resposta = 8;
                    vetor1.push(num);
                    break;
                case 5:
                    this.pergunta = ' 2 + 5 ';
                    this.resposta = 7;
                    vetor1.push(num);
                    break;
                case 6:
                    this.pergunta = ' 10 + 10 ';
                    this.resposta = 20;
                    vetor1.push(num);
                    break;
                case 7:
                    this.pergunta = ' 7 + 7 ';
                    this.resposta = 14;
                    vetor1.push(num);
                    break;
                default:
                    break;
            }
        } else this.deuErrado = true;
    }
    else if (acerto >= 4 && acerto <= 7) {
        nivel = 2;
        if (vetor2.indexOf(num) == -1) {
            switch (num) {
                case 0:
                    this.pergunta = ' 1 x 1 ';
                    this.resposta = 1;
                    vetor2.push(num);
                    break;
                case 1:
                    this.pergunta = ' 2 x 2 ';
                    this.resposta = 4;
                    vetor2.push(num);
                    break;
                case 2:
                    this.pergunta = ' 3 x 3 ';
                    this.resposta = 9;
                    vetor2.push(num);
                    break;
                case 3:
                    this.pergunta = ' 3 x 4 ';
                    this.resposta = 12;
                    vetor2.push(num);
                    break;
                case 4:
                    this.pergunta = ' 3 x 5 ';
                    this.resposta = 15;
                    vetor2.push(num);
                    break;
                case 5:
                    this.pergunta = ' 2 x 5 ';
                    this.resposta = 10;
                    vetor2.push(num);
                    break;
                case 6:
                    this.pergunta = ' 10 x 10 ';
                    this.resposta = 100;
                    vetor2.push(num);
                    break;
                case 7:
                    this.pergunta = ' 7 x 7 ';
                    this.resposta = 49;
                    vetor2.push(num);
                    break;
                default:
                    break;
            }
        } else this.deuErrado = true;
    }
    else {
        nivel = 3;
        if (vetor3.indexOf(num) == -1) {
            switch (num) {
                case 0:
                    this.pergunta = ' 10² ';
                    this.resposta = 100;
                    vetor3.push(num);
                    break;
                case 1:
                    this.pergunta = ' 2¹ ';
                    this.resposta = 2;
                    vetor3.push(num);
                    break;
                case 2:
                    this.pergunta = ' 3³ ';
                    this.resposta = 27;
                    vetor3.push(num);
                    break;
                case 3:
                    this.pergunta = ' 4² ';
                    this.resposta = 16;
                    vetor3.push(num);
                    break;
                case 4:
                    this.pergunta = ' 5² ';
                    this.resposta = 25;
                    vetor3.push(num);
                    break;
                case 5:
                    this.pergunta = ' 6² ';
                    this.resposta = 36;
                    vetor3.push(num);
                    break;
                case 6:
                    this.pergunta = ' 10¹ ';
                    this.resposta = 10;
                    vetor3.push(num);
                    break;
                case 7:
                    this.pergunta = ' 1³ ';
                    this.resposta = 1;
                    vetor3.push(num);
                    break;
                default:
                    break;
            }
        } else this.deuErrado = true;
    }
}
//quadro de questoes...
function createQuadro() {
    let div = document.createElement('div');
    div.setAttribute('class', 'div');
    div.setAttribute('id', 'quadro');
    document.getElementById('conteiner').appendChild(div);
    questao();
    createTela();
}
let resp;
//questoes...
function questao() {
    let div = document.createElement('div');
    div.setAttribute('class', 'titulo');
    do {
        obj = new pergunta();
    } while (obj.deuErrado && acerto < 13);
    resp = obj.resposta;
    div.innerHTML = 'Quanto é ' + obj.pergunta + '?';
    if (acerto >= 13) div.innerHTML = '<a href="index.html">Comece outra vez</a>';
    document.getElementById('quadro').appendChild(div);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Digite a resposta');
    input.setAttribute('name', 'a');
    input.setAttribute('id', 'input');
    input.setAttribute('size', '30');
    input.setAttribute('autofocus', '');
    document.getElementById('quadro').appendChild(input);

    let inp = document.createElement('input');
    inp.setAttribute('id', 'submit');
    inp.setAttribute('type', 'submit');
    inp.setAttribute('class', 'input');
    inp.addEventListener('click', valida);
    document.getElementById('quadro').appendChild(inp);
}

document.body.onkeypress = () => {
    if (event.keyCode == 13 && $('#input').value != '') valida();
}
function valida() {
    let elem = document.getElementById('input');
    if (elem.value == resp) {
        acerto++;
        $('#conteiner').remove();
        createDiv();
    } else {
        if (elem.value != '') {
            acerto = 0;
            elem.value = '';
            let tela = document.getElementById('tela');
            tela.innerHTML = '';
            tela.innerHTML = 'Que pena :(<br>Tente de novo';
            setTimeout(() => {
                $('#conteiner').remove();
                createDiv();
            }, 2000);
        }
    }
}
function createTela() {
    //cria a div para exibir mensagens para o usuario...
    let div = document.createElement('div');
    div.setAttribute('class', 'resposta');
    div.setAttribute('id', 'tela');
    div.setAttribute('max-height', '20%');
    div.innerHTML = 'Respostas certas: ' + acerto + '<br>Nivel: ' + nivel;
    document.getElementById('quadro').append(div);
}