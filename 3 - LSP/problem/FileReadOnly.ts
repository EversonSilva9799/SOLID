import { File } from './File';

export class FileReadOnly extends File {
	public ready() {
		console.log('Lendo arquivo');
	}

	public write() {
		throw "Can' white file";
	}
}
