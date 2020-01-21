import { IfileRead } from './IfileRead';

export class FileReadOnly implements IfileRead {
	public read() {
		console.log('Lendo arquivo');
	}
}
