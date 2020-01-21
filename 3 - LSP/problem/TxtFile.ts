import { File } from './File';

export class TxtFile extends File {
	public ready() {
		console.log('Lendo o TXT');
	}

	public write() {
		console.log('Escrevendo no txt');
	}
}
