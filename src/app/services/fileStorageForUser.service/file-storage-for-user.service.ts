import { Injectable } from '@angular/core';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FileStorageForUserService {
  private promise: Promise<string>;
  data: any;// = '{"name":"Maksym Black","email":"dieslog@gmail.com","phone":"+380971679796","password":"b59c67bf196a4758191e42f76670ceba"}';

  constructor(
    private file: File,
    private filePath: FilePath,
    private http: HttpClient,
  ) { 
  }
  createFile() {
    this.file.checkFile(this.file.dataDirectory, 'user_info').then(massage => {
      if(massage) {
        console.log('file exists already exists\n' + massage);
        return;
      } 
    }, (error) => {
      this.file.createFile(this.file.dataDirectory, 'user_info', true)
        .then(massage => {
          console.log("Create file\n" + massage);
        });
    });
  }

  writeToFile(user) {
    this.data = new Blob([user], {type: 'text/plain'});
    this.file.writeFile(this.file.dataDirectory, 'user_info', this.data, { replace:true, append: false })
      .then(massage => {
      console.log("Write to file\n" + massage);
    });
  }

  readFile() {
    this.file.readAsText(this.file.dataDirectory, 'user_info').then(data => {
      console.log(data);
       
    });   
  }

  removeFile(fileName) {
    this.file.removeFile(this.file.dataDirectory, fileName).then(() => {
      console.log("File " + fileName + "is removed");
    });
  }
}
