import * as fs from 'fs';
import * as path from 'path';
import convert from './../utils/convert';
import Data from './../models/Data';

export default class Banco<T extends Data> {
	private arquivo: string;

	constructor(arquivo: string) {
		this.arquivo = arquivo;
		this.dadosCadastrados();
	}

	private dadosCadastrados(): T[] {
		try {
			let dados = fs.readFileSync(path.join(__dirname, this.arquivo));
			return JSON.parse(dados.toString());
		} catch (err) {}
	}

	public pegarDadoBanco(id: number): T {
		let dadosCadastrados = this.dadosCadastrados();
		let dado = dadosCadastrados.filter((dado: T) => {
			return dado.id == id;
		});

		return dado[0];
	}

	private pegarIndex(dado: T): number {
		let dadosCadastrados = this.dadosCadastrados();

		let index: number;
		dadosCadastrados.filter((dadoEncontrado: T, i: number) => {
			if (dadoEncontrado.id == dado.id) {
				index = i;
				return;
			}
		});

		return index;
	}

	private adicionarId(ultimoId: number, dado: T): T {
		dado.id = Number(ultimoId) + 1;
		return dado;
	}

	private salvarArquivo(dados: T[]) {
		let dadosSalvar = convert.toJson(dados);
		fs.writeFileSync(path.join(__dirname, this.arquivo), dadosSalvar);
	}

	public cadastrar(dado: T) {
		try {
			let dadosCadastrados: Array<T> = this.dadosCadastrados();
			let novoDado: T;

			if (dadosCadastrados.length > 0) {
				let ultimoDado = dadosCadastrados[dadosCadastrados.length - 1];

				novoDado = this.adicionarId(ultimoDado.id, dado);
			} else {
				novoDado = this.adicionarId(0, dado);
			}

			dadosCadastrados.push(novoDado);

			this.salvarArquivo(dadosCadastrados);
		} catch (err) {}
	}

	public deletar(id: number): void {
		try {
			let dadosCadastrados = this.dadosCadastrados();

			let dados = dadosCadastrados.filter((dado: T) => {
				return dado.id != id;
			});

			this.salvarArquivo(dados);
		} catch (err) {}
	}

	public editar(dado: T): T {
		let dadosCadastrados = this.dadosCadastrados();

		let dadoBanco: T = this.pegarDadoBanco(dado.id);

		let index = this.pegarIndex(dado);

		dadosCadastrados[index] = dado;

		this.salvarArquivo(dadosCadastrados);

		return dadoBanco;
	}
}
