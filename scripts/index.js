import { ConverteEntrada } from './converte.js';
import { DesenhaMarcadores } from './marcadores.js';

export function Simular() {
    //'1-909090909090'
    //'0-90909090'
    //'0-9292921022202220'
    let entrada = `0-${document.getElementById('entrada').value}`;
    let chave = entrada.split('-');
    let texto = ConverteEntrada(chave[1]);
    DesenhaMarcadores(texto, chave);
}

document.addEventListener('DOMContentLoaded', () => {
    const entradaElement = document.getElementById('entrada');
    entradaElement.addEventListener('change', Simular);

    Simular(); //executa a função ao carregar a página inicialmente.
});