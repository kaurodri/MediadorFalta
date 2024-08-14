export function ConverteEntrada(chave) {

    let ch = chave[0].split('');
    //aula no dia
    let xx = Number(ch[0])
    //aula na semana
    let xy = Number(ch[1])

    let texto = chave[1]

    let resultado = '';

    const map1 = {
        '0': '☐',
        '1': '☒',
        '2': '☑',
        '3': '◫'
    }, map2 = {
        '0': '☐☐',
        '1': '☒☒',
        '2': '☑☑',
        '3': '☐◫'
    }, map3 = {
        '0': '☐☐☐',
        '1': '☒☒☒',
        '2': '☑☑☑',
        '3': '☐◫◫'
    };

    const indice = {
        1: map1,
        2: map2,
        3: map3
    }

    //percorre a string em pares de caracteres.
    for (let i = 0; i < texto.length; i += 2) {
        //lê os dois caracteres.
        let par = texto.substr(i, 2);

        if (par.length === 2) { //verifica se temos um par completo.
            let num = parseInt(par.charAt(0));
            let char = par.charAt(1);
            if (indice[xx][char]) {
                //repete o símbolo 'num' vezes e adiciona ao resultado.
                for (let j = 0; j < num; j++) {
                    resultado += indice[xx][char];
                }
            }
        }
    };

    if (xx == 2) {

        function Separar(str) {
            let resultado = '';
            for (let i = 0; i < str.length; i += 2) {
                resultado += str.substr(i, 2) + ' ';
            }
            return resultado.trim();
        }

        return Separar(resultado);
    }

    if (xx == 3) {

        function Separar(str) {
            let resultado = '';
            for (let i = 0; i < str.length; i += 3) {
                resultado += str.substr(i, 3) + ' ';
            }
            return resultado.trim();
        }

        return Separar(resultado);
    }



    
}