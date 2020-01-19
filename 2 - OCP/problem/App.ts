import { Mp3File } from './Mp3File';
import { Mp4File } from './Mp4File';
import { Upload } from './Upload';

let mp3 = new Mp3File('file mp3', 'mp3');
let mp4 = new Mp4File('file mp4', 'mp4');

let upload = new Upload();

upload.toDoUpload(mp3);
upload.toDoUpload(mp4);
