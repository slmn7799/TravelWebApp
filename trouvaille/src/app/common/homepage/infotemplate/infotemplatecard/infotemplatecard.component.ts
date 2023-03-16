import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infotemplatecard',
  templateUrl: './infotemplatecard.component.html',
  styleUrls: ['./infotemplatecard.component.css']
})
export class InfotemplatecardComponent {
  
  @Input() titleStart : string = '';
  @Input() titleEnd : string = '';
  @Input() subContent : string = '';
  @Input() link_content : string = '';

}

