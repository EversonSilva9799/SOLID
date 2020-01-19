import { File } from './File';

export class Mp3File extends File {
	constructor(name: string) {
		super(name);
		this.type = 'mp3';
	}
	public upload() {
		console.log('upload da música');
	}
}
