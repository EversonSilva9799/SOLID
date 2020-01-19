import { ConexaoDb } from './ConexaoDb';
import { File } from './File';

export class Upload {
	public toDoUpload(file: File): boolean {
		if (file.isValid()) return false;

		console.log('upload realizado');

		let conexaoDb: ConexaoDb = new ConexaoDb();

		conexaoDb.insert(file.getName());
	}
}
