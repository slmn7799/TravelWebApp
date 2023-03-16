import { Component } from '@angular/core';
import { INFO } from './info.codes';

@Component({
  selector: 'app-infotemplate',
  templateUrl: './infotemplate.component.html',
  styleUrls: ['./infotemplate.component.css']
})
export class InfotemplateComponent {

  infoObject = INFO;
  

}
