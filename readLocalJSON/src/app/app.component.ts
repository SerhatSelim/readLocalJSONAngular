import { Component } from '@angular/core';
import { JsonFileServiceService } from './json-file-service.service';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'readLocalJSON';
  public documentationElement = {
    id: String,
    icon: String,
    title: String,
    subtitles: [{
      title: String,
      body: String,
      imgPath: String
    }]
  };
  /**
   *
   */
  constructor(private documentationService: JsonFileServiceService) {
    this.documentationService.getDocumentationData().subscribe(result => {
      console.log(result);
      this.documentationElement =  JSON.parse(JSON.stringify(result.data[0]));
       console.log('*********', this.documentationElement);
       console.log('subtitles.imgPath', this.documentationElement.subtitles[0].imgPath);

  });
  }
}
