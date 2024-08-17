//contagem de aulas que já faltou.
export function AulasFalta(texto) {
    let contagem = 0;
    for (let i = 0; i < texto.length; i += 2) {
        let quantidade = parseInt(texto[i], 10);
        let numero = texto[i + 1];

        if (numero === '1') {
            contagem += quantidade;
        }
    }
    return contagem;
};