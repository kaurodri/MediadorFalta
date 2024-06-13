export function ConverteEntrada(texto) {
    let resultado = '';

    const map = {
        '0': '☐☐',
        '1': '☒☒',
        '2': '☑☑',
        '3': '☐◫'
    };

    //percorre a string em pares de caracteres.
    for (let i = 0; i < texto.length; i += 2) {
        //lê os dois caracteres.
        let par = texto.substr(i, 2);

        if (par.length === 2) { //verifica se temos um par completo.
            let num = parseInt(par.charAt(0));
            let char = par.charAt(1);
            if (map[char]) {
                //repete o símbolo 'num' vezes e adiciona ao resultado.
                for (let j = 0; j < num; j++) {
                    resultado += map[char];
                }
            }
        }
    };

    function Separar(str) {
        let resultado = '';
        for (let i = 0; i < str.length; i += 2) {
            resultado += str.substr(i, 2) + ' ';
        }
        return resultado.trim();
    }

    return Separar(resultado);
}