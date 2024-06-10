document.addEventListener('DOMContentLoaded', () => {
    let textElement = document.getElementById('text');
    let words = textElement.innerText.split(' ');

    //recria o conteúdo com <span> e adiciona quebra de linha a cada quatro palavras.
    let formattedText = '';
    for (let i = 0; i < words.length; i++) {
        formattedText += `<span>${words[i]}</span>`;
        if ((i + 1) % 4 === 0 && i !== words.length - 1) {
            formattedText += '-';
        } if ((i + 1) % 8 === 0 && i !== words.length - 1) {
            formattedText += '<br>';
        } else {
            formattedText += ' ';
        }
    }
    textElement.innerHTML = formattedText;

    textElement.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPAN') {
            if (event.target.classList.toggle('red')) {
                event.target.innerText = '☒';
            } else {
                event.target.innerText = '☐';
            }
        }
    });
});