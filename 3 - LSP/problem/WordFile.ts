import { File } from './File';

export class WordFile extends File {
	public ready() {
		console.log('Lendo o Word');
	}

	public write() {
		console.log('Escrevendo no word');
	}
}
