document.addEventListener('DOMContentLoaded', () => {
    let texto = "☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐";
    let words = texto.split(' ');
    const textElement = document.getElementById('text');

    //recria o conteúdo com <span> e adiciona quebra de linha a cada quatro palavras.
    let formattedText = '';
    for (let i = 0; i < words.length; i++) {
        let wordSpan = `<span>${words[i]}</span>`;
        if ((i + 1) % 4 === 0 && i !== words.length - 1) {
            wordSpan += '-';
        } if ((i + 1) % 8 === 0 && i !== words.length - 1) {
            wordSpan += '<br>';
        } else {
            wordSpan += ' ';
        }

        //a cada 2 palavras, as próximas 2 palavras têm a cor diferente.
        if (Math.floor(i / 2) % 2 === 1) {
            wordSpan = wordSpan.replace('<span>', '<span class="blue original-blue">');
        }

        formattedText += wordSpan;
    }

    textElement.innerHTML = formattedText;

    textElement.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPAN') {
            if (event.target.classList.contains('red')) {
                event.target.classList.remove('red');
                event.target.innerText = '☐';

                //reaplica a classe se a palavra tiver original.
                if (event.target.classList.contains('original-blue')) {
                    event.target.classList.add('blue');
                }
            } else {
                event.target.classList.remove('blue'); //remove a classe se presente.
                event.target.classList.add('red');
                event.target.innerText = '☒';
            }
        }
    });
});