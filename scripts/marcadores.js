export function DesenhaMarcadores(texto, Dias, marcadores) {

    let words = texto.split(' ');
    const textElement = document.getElementById('text');

    let conf = [[1, 3],[2, 4], [3, 6]];
    let use = conf[Dias-1];
    
    let formattedText = '';
    for (let i = 0; i < words.length; i++) {
        let ma = marcadores;
        let wordSpan = ma.split(' ')[i];

        const Mapeamento = {
            '☐': { cor: '' },
            '☒': { cor: 'red' },
            '☑': { cor: 'green' },
            '◫': { cor: 'blue' },
            '◒': { cor: 'yellow' },
            '◪': { cor: 'yellow' }
        };

        let cores = Mapeamento[words[i].split('')[1]].cor

        const reg = /<span>.*<\/span>/g;

        //divisória de aulas por semana
        if (i % Dias === 0) {
            wordSpan = wordSpan.replace('<span>', 'ㅤ<span>');
        }
        
        //a cada 2 palavras, as próximas 2 palavras têm a cor diferente.
        if (i % 2 === 1 && words[i].split('')[1] === '☐') {
            wordSpan = wordSpan.replace('<span>', '<span class="gray original-gray">');
        } else if (i % 2 === 1 && words[i].split('')[1] != '☐') {
            wordSpan = wordSpan.replace('<span>', '<span class="' + cores + ' original-gray">');
        } else {
            wordSpan = wordSpan.replace('<span>', '<span class="' + cores + '">');
        }

        formattedText += wordSpan;
    }




    textElement.innerHTML = formattedText;

}

/*
let words = texto.split(' ');
    const textElement = document.getElementById('text');

    //recria o conteúdo com <span> e adiciona quebra de linha a cada quatro palavras.
    let conf = [[2, 4], [3, 6],[1, 4]];
    let use = [1, 4];//conf[Number(chave[0])];
    let formattedText = '';
    for (let i = 0; i < words.length; i++) {
        let wordSpan = `<span>${words[i]}</span>`;
        if ((i + 1) % use[0] === 0 && i !== words.length - 1) {
            wordSpan += 'ㅤ';
        } if ((i + 1) % use[1] === 0 && i !== words.length - 1) {
            wordSpan += '<br>';
        } else {
            wordSpan += ' ';
        }

        const Mapeamento = {
            '☐☐': { cor: '' },
            '☒☒': { cor: 'red' },
            '☑☑': { cor: 'green' },
            '☐◫': { cor: 'blue' }
        };

        let cores = Mapeamento[words[i]].cor

        //a cada 2 palavras, as próximas 2 palavras têm a cor diferente.
        if (i % 2 === 1 && words[i] === '☐☐') {
            wordSpan = wordSpan.replace('<span>', '<span class="gray original-gray">');
        } else if (i % 2 === 1 && words[i] != '☐☐') {
            wordSpan = wordSpan.replace('<span>', '<span class="'+cores+' original-gray">');
        } else {
            wordSpan = wordSpan.replace('<span>', '<span class="'+cores+'">');
        }

        formattedText += wordSpan;
    }

    textElement.innerHTML = formattedText;

    textElement.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPAN') {

            const Mapeamento = {
                '☐☐': { novoTexto: '☒☒', novaClasse: 'red' },
                '☒☒': { novoTexto: '☑☑', novaClasse: 'green' },
                '☑☑': { novoTexto: '☐◫', novaClasse: 'blue' },
                '☐◫': { novoTexto: '☐☐', novaClasse: '' }
            };

            //texto atual do elemento clicado.
            const elementoTexto = event.target.innerText;
            const mapeando = Mapeamento[elementoTexto];

            //remove as classes.
            event.target.classList.remove('red', 'green', 'gray', 'blue');

            //adiciona a nova classe se no mapeamento não estiver vazia.
            if (mapeando.novaClasse) {
                event.target.classList.add(mapeando.novaClasse);
            }

            //volta o elemento para sua cor de origem.
            if (elementoTexto === '◫◫' && event.target.classList.contains('original-gray')) {
                event.target.classList.add('gray');
            }

            //altera o texto do elemento.
            event.target.innerText = mapeando.novoTexto;
        }
    });

*/