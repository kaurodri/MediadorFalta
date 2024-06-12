export function convertEntrada(texto) {
    let resultado = '';

    const map = {
        '0': '☐☐',
        '1': '☒☒',
        '2': '☑☑',
        '3': '☐◫'
    };

    // Percorre cada caractere do input
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i);
        if (map[char]) {
            //adiciona o símbolo correspondente à variável de resultado, seguido de um espaço
            resultado += map[char] + ' ';
        }
    };

    resultado = resultado.trim(); //remove o espaço extra no final da string

    return resultado;
}