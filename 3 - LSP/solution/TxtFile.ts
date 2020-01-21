import { IfileRead } from './IfileRead';
import { IfileWrite } from './IfileWrite';

export class TxtFile implements IfileRead, IfileWrite {
	public read() {
		console.log('Lendo o TXT');
	}

	public write() {
		console.log('Escrevendo no txt');
	}
}
