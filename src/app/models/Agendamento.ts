export default class Agendamento {
	public id: number;
	public horario: string;
	public tempoLigado: number;
	public led: number;
	public status: number;
	public ativado: boolean;

	constructor(id: number, horario: string, tempoLigado: number, led: number, status: number, ativado: boolean) {
		this.id = id;
		this.horario = horario;
		this.tempoLigado = tempoLigado;
		this.led = led;
		this.status = status;
		this.ativado = ativado;
	}
}
