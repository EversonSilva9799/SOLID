import { File } from './File';
import { Mp3File } from './Mp3File';
import { Mp4File } from './Mp4File';

export class Upload {
	public toDoUpload(file: File): void {
		if (file instanceof Mp3File) {
			console.log('Upload de arquivo Mp3');
		} else if (file instanceof Mp4File) {
			console.log('Upload de arquivo Mp4');
		}
	}
}
