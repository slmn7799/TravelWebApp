import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.css']
})
export class CommentcardComponent {

  @Input() commentContent: String = '';
  @Input() profileImg: String = '';
  @Input() profileName: String = '';
  @Input() blogLink: String = '';
  @Input() blogLinkHref: String = '';

}
