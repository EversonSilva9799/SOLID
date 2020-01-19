import { File } from './File';

export class PdfFile extends File {
	constructor(name: string) {
		super(name);
		this.type = 'pdf';
	}

	upload() {
		console.log('upload arquivo pdf');
	}
}
