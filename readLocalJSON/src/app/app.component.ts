import { Component } from '@angular/core';
import { JsonFileServiceService } from './json-file-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'readLocalJSON';
  /**
   *
   */
  constructor(private documentationService: JsonFileServiceService) {
    this.documentationService.getDocumentationData().subscribe(data => {
      console.log(data);
  });
  }
}
