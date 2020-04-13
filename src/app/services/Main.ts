import Banco from './Banco';
import Agendamento from './../models/Agendamento';

let banco = new Banco<Agendamento>('agendamentos.json');

let ag = { id: 1, horario: '07:00', tempoLigado: 10, led: 2, status: 0, ativado: false } as Agendamento;
//banco.cadastrar(ag);
banco.editar(ag);
