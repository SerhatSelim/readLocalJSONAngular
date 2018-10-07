import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonFileServiceService {

  constructor(private httpClient: HttpClient) {
    this.getDocumentationData().subscribe(data => {
      console.log(data);
    });
  }



  public getDocumentationData(): Observable<any> {
    return this.httpClient.get('../assets/documentation.json');
  }
}
