import { ExecutarArquivo } from './ExecutarArquivo';
import { File } from './File';
import { FileReadOnly } from './FileReadOnly';
import { TxtFile } from './TxtFile';
import { WordFile } from './WordFile';

let txt: File = new TxtFile('file.txt');
let word: File = new WordFile('file.word');
let read: File = new FileReadOnly('file.read');

let executarArquivo: ExecutarArquivo = new ExecutarArquivo();

executarArquivo.executar(txt);
executarArquivo.executar(word);
executarArquivo.executar(read);
