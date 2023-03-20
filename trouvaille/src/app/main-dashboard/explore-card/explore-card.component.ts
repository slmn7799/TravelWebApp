import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.css']
})
export class ExploreCardComponent {

  @Input() imgSrc : string = '';
  @Input() profileImg : string = '';
  @Input() profileName : string = '';
  @Input() cardTitle : string = '';
  @Input() desc : string = '';
  @Input() likes : string = '';
  @Input() views : string = '';

}
