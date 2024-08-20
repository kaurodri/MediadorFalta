import { AulasFalta } from './biblioteca.js';

export function ConverteEntrada(chave, horas) {

    //Variáveis
    let aulas = (horas * 60) / 50;
    let faltas = Math.floor((aulas * 25) / 100);

    let ch = chave[0].split('-');

    let aulas_dia = Number(ch[1]) //aula no dia
    let texto = chave[1];
    let resultado = '';

    const map1 = {
        '0': '☐',
        '1': '☒',
        '2': '☑',
        '3': '◫',
        '4': '◪'
    }, map2 = {
        '0': '☐☐',
        '1': '☒☒',
        '2': '☑☑',
        '3': '☐◫',
        '4': '☐◪'
    }, map3 = {
        '0': '☐☐☐',
        '1': '☒☒☒',
        '2': '☑☑☑',
        '3': '☐◫◫',
        '4': '☐◪◪'
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

    //adicionar marcadores restantes
    let aulas_adicionadas = resultado.replace(/\s+/g, '').split('');
    let pares_faltas = Math.floor(faltas / aulas_dia);

    let restantes = (aulas - aulas_adicionadas.length) / aulas_dia;
    for (let i = 0; i < restantes; i++) {

        if(i < (restantes - (pares_faltas - AulasFalta(texto)))){
            resultado += indice[aulas_dia][0];
        } else {
            resultado += indice[aulas_dia][4];
        }
    }
    //45 x 60 = 54 aulas  //pode faltar 13 dias

    function Separar(str, k) {
        let resultado = '';
        for (let i = 0; i < str.length; i += k) {
            resultado += str.substr(i, k) + ' ';
        }
        return resultado.trim();
    }

    if (aulas_dia == 2) return Separar(resultado, 2);

    if (aulas_dia == 3) return Separar(resultado, 3);

}