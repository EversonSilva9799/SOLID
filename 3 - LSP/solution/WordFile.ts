import { IfileRead } from './IfileRead';
import { IfileWrite } from './IfileWrite';

export class WordFile implements IfileRead, IfileWrite {
	public read() {
		console.log('Lendo o Word');
	}

	public write() {
		console.log('Escrevendo no word');
	}
}
