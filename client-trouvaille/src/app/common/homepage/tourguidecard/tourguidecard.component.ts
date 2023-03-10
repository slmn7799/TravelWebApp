import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tourguidecard',
  templateUrl: './tourguidecard.component.html',
  styleUrls: ['./tourguidecard.component.css']
})
export class TourguidecardComponent {

  @Input() imgSrc: String = '';
  @Input() titleCaption: String = '';
  @Input() profileImgSrc: String = '';
  @Input() profileName: String = '';
  @Input() viewStats: any;
  @Input() likeStats: any;

}
