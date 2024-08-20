import { ConverteEntrada } from './converte.js';
import { organizarMarcadores } from './organizar.js';
import { DesenhaMarcadores } from './marcadores.js';

export function Simular() {
    
    let entrada = document.getElementById('entrada').value;
    let chave = entrada.split('|');

    let horas = Number(chave[0].split('-')[0]);

    let texto = ConverteEntrada(chave, horas)

    organizarMarcadores(texto, chave);
    
    let marcadores = organizarMarcadores(texto, chave);
    DesenhaMarcadores(texto, chave, marcadores);
}

document.addEventListener('DOMContentLoaded', () => {
    const entradaElement = document.getElementById('entrada');
    entradaElement.addEventListener('change', Simular);

    Simular(); //executa a função ao carregar a página inicialmente.
});