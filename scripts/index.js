import { ConverteEntrada } from './converte.js';
import { organizarMarcadores } from './organizar.js';
import { DesenhaMarcadores } from './marcadores.js';

export function Simular() {
    let entrada = document.getElementById('entrada').value;
    let chave = entrada.split('-');

    let texto = ConverteEntrada(chave)
    organizarMarcadores(texto, chave);
    
    let marcadores = organizarMarcadores(texto, chave);
    DesenhaMarcadores(texto, chave, marcadores);
}

document.addEventListener('DOMContentLoaded', () => {
    const entradaElement = document.getElementById('entrada');
    entradaElement.addEventListener('change', Simular);

    Simular(); //executa a função ao carregar a página inicialmente.
});