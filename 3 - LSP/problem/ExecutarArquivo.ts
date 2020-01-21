import { File } from './File';
import { FileReadOnly } from './FileReadOnly';

export class ExecutarArquivo {
	public executar(file: File): void {
		if (file instanceof FileReadOnly) {
			file.ready();
		} else {
			file.ready();
			file.write();
		}
	}
}
