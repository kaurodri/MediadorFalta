import { ConverteEntrada } from './converte.js';
import { organizarMarcadores } from './organizar.js';
import { DesenhaMarcadores } from './marcadores.js';

export function Simular() {
    let input = document.getElementById('entrada').value;
    let conf = input.split('|')[0].split('-');
    let entrada = [
        input.split('|')[1],
        Number(conf[0]),
        Number(conf[1]),
        Number(conf[2])
    ]
    let [numeros, horas, aulasDia, Dias] = entrada;
    let texto = ConverteEntrada(numeros, horas, aulasDia);
    let marcadores = organizarMarcadores(texto, Dias);
    DesenhaMarcadores(texto, Dias, marcadores);
}

document.addEventListener('DOMContentLoaded', () => {
    const entradaElement = document.getElementById('entrada');
    entradaElement.addEventListener('change', Simular);
    Simular(); //executa a função ao carregar a página inicialmente.
});