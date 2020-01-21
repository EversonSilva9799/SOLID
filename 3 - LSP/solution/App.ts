import { ExecutarArquivo } from './ExecutarArquivo';
import { File } from './File';
import { FileReadOnly } from './FileReadOnly';

// let txt: File = new TxtFile();
// let word: File = new WordFile();
let read: File = new FileReadOnly();

let executarArquivo: ExecutarArquivo = new ExecutarArquivo();

// executarArquivo.executar(txt);
// executarArquivo.executar(word);
executarArquivo.executar(read);
