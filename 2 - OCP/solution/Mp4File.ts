import { File } from './File';

export class Mp4File extends File {
	constructor(name: string) {
		super(name);
		this.type = 'mp4';
	}
	public upload() {
		console.log('upload da video');
	}
}
