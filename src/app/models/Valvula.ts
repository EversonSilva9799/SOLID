export class Valvula {
	private id?: number;
	private valvula: number;
	private status: number;
	private secao: string;

	constructor(id: number, valvula: number, status: number, secao: string) {
		this.id = id;
		this.valvula = valvula;
		this.status = status;
		this.secao = secao;
	}

	public getId(): number {
		return this.id;
	}

	public setId(id: number): void {
		this.id = id;
	}

	public getValvula(): number {
		return this.valvula;
	}

	public setValvula(valvula: number): void {
		this.valvula = valvula;
	}

	public getStatus(): number {
		return this.status;
	}

	public setStatus(status: number): void {
		this.status = status;
	}

	public getSecao(): string {
		return this.secao;
	}

	public setSecao(secao: string): void {
		this.secao = secao;
	}
}
