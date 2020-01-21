import { File } from './File';

export class ExecutarArquivo {
	public executar(file: File): void {
		if (file instanceof IfileRead) {
			files.read();
		}
		if (file instanceof IfileWrite) {
			file.write();
		}
	}
}
