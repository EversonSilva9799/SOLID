import { File } from './File';

export class Upload {
	public toDoUpload(file: File): void {
		file.upload();
	}
}
