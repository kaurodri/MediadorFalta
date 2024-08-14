export function organizarMarcadores(texto, chave) {

    let words = texto.split(' ');
    let aulaSemana = Number(chave[0][1]) - 1;
    
    //recria o conteúdo com <span> e adiciona quebra de linha a cada quatro palavras.
    let conf = [[1, 3],[2, 4], [3, 6]]; //[aula na semana, colunas]
    let use = conf[aulaSemana];
    let formattedText = '';
    for (let i = 0; i < words.length; i++) {
        let wordSpan = `<span>${words[i]}</span>`;
        if ((i + 1) % use[1] === 0 && i !== words.length - 1) {
            wordSpan += ' <br>';
        } else {
            wordSpan += ' ';
        }

        formattedText += wordSpan;
    }

    return formattedText;
}