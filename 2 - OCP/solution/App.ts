import { File } from './File';
import { Mp3File } from './Mp3File';
import { Mp4File } from './Mp4File';
import { PdfFile } from './PdfFile';
import { Upload } from './Upload';

let mp3: File = new Mp3File('file mp3');
let mp4: File = new Mp4File('file mp4');
let pdf: File = new PdfFile('file pdf');

let upload = new Upload();

upload.toDoUpload(mp3);
upload.toDoUpload(mp4);
upload.toDoUpload(pdf);
