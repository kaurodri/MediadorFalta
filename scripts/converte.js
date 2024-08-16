export function ConverteEntrada(chave, horas) {

    let aulas = (horas * 60) / 50 //72
    let faltas = (aulas * 25) / 100; //18

    let ch = chave[0].split('');

    let aulas_dia = Number(ch[0]) //aula no dia

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
            if (indice[aulas_dia][char]) {
                //repete o símbolo 'num' vezes e adiciona ao resultado.
                for (let j = 0; j < num; j++) {
                    resultado += indice[aulas_dia][char];
                }
            }
        }
    };

   
    //contagem aulas que já faltou.
    let contagem = 0;
    for (let i = 0; i < texto.length; i += 2) {
        let quantidade = parseInt(texto[i], 10);
        let numero = texto[i + 1];

        if (numero === '1') {
            contagem += quantidade;
        }
    }


    //adicionar marcadores restantes
    let aulas_adicionadas = resultado.replace(/\s+/g, '').split('');
    let pares_faltas = faltas / 2

    let restantes = (aulas - aulas_adicionadas.length) / aulas_dia;
    for (let i = 0; i < restantes; i++) {

        if(i < (restantes - (pares_faltas - contagem))){
            resultado += indice[aulas_dia][0];
        } else {
            resultado += indice[aulas_dia][1];
        }
    }

    if (aulas_dia == 2) {

        function Separar(str) {
            let resultado = '';
            for (let i = 0; i < str.length; i += 2) {
                resultado += str.substr(i, 2) + ' ';
            }
            return resultado.trim();
        }

        return Separar(resultado);
    }

    if (aulas_dia == 3) {

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