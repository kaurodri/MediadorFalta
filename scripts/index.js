// ! Importante: Código que será usado para o Organizador de Disciplinas
// ! HTML usado meramente como exemplo.

import { ConverteEntrada } from './converte.js';
import { organizarMarcadores } from './organizar.js';
import { DesenhaMarcadores } from './marcadores.js';

export function Simular() {
    // TODO: Fazer alteração de marcadores usando mouse click.
    let input = document.getElementById('entrada').value;
    let conf = input.split('|')[0].split('-');
    const entrada = [
        input.split('|')[1],
        Number(conf[0]),
        Number(conf[1]),
        Number(conf[2])
    ];
    let [numeros, horas, aulasDia, dias] = entrada;
    let texto = ConverteEntrada(numeros, horas, aulasDia);
    let marcadores = organizarMarcadores(texto, dias);
    DesenhaMarcadores(texto, dias, marcadores);

    { //Mudar elementos
        document.getElementById('horas').value = horas;
        document.getElementById('diaAula').value = aulasDia;
        document.getElementById('diaSemana').value = dias;
    }

}

export function Modificar() {
    // TODO: Tentar ver uma forma de distribuir melhor as variáveis.
    let entradaElemento = document.getElementById('entrada');
    let horas = document.getElementById('horas').value;
    let dia = document.getElementById('diaAula').value;
    let Semana = document.getElementById('diaSemana').value;
    let entrada = entradaElemento.value;
    let [cargaHora, diaAula, diaSemana, restante] = entrada.split(/[-|]/);
    //modificar
    cargaHora = horas;
    diaAula = dia;
    diaSemana = Semana;
    //string
    let novaString = `${cargaHora}-${diaAula}-${diaSemana}|${restante}`;
    entradaElemento.value = novaString
    Simular();
}

document.addEventListener('DOMContentLoaded', () => {
    // TODO: Padronizar nome das variáveis.
    const elementos = [
        document.getElementById('entrada'),
        document.getElementById('horas'),
        document.getElementById('diaAula'),
        document.getElementById('diaSemana')
    ];
    let [entrada, horas, aulasdias, diasemana] = elementos;
    entrada.addEventListener('change', Simular);
    horas.addEventListener('change', Modificar);
    aulasdias.addEventListener('change', Modificar);
    diasemana.addEventListener('change', Modificar);
    Simular();
});