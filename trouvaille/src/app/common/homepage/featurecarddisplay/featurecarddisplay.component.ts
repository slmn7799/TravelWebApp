import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featurecarddisplay',
  templateUrl: './featurecarddisplay.component.html',
  styleUrls: ['./featurecarddisplay.component.css']
})
export class FeaturecarddisplayComponent {

  @Input() imgUrl : String = '';
  @Input() cardTitle : String = '';
  @Input() cardSubContent : String = '';

}
