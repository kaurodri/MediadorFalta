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
    ];
    let [numeros, horas, aulasDia, dias] = entrada;
    let texto = ConverteEntrada(numeros, horas, aulasDia);
    let marcadores = organizarMarcadores(texto, dias);
    DesenhaMarcadores(texto, dias, marcadores);

    {
        let horasElemento = document.getElementById('horas');
        horasElemento.value = horas;
    }

}

export function Horas() {
    let entradaElemento = document.getElementById('entrada');
    let horas = document.getElementById('horas').value;
    let entrada = entradaElemento.value;
    let string = horas + entrada.substr(2);
    entradaElemento.value = string
    Simular();
}

document.addEventListener('DOMContentLoaded', () => {
    let elementos = [document.getElementById('entrada'), document.getElementById('horas')];
    let [entrada, horas] = elementos;
    entrada.addEventListener('change', Simular);
    horas.addEventListener('change', Horas);
    Simular();
});