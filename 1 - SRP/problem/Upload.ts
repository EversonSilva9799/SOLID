import { File } from './File';

export class Upload {
	public toDoUpload(file: File): boolean {
		if (!this.fileValid(file)) return false;

		console.log('upload realizado');
	}

	public fileValid(file: File): boolean {
		if (file.getName()) {
			return true;
		}

		return false;
	}

	public salvarNameBanco() {
		console.log('Nome do arquivo salvo no banco');
	}
}
