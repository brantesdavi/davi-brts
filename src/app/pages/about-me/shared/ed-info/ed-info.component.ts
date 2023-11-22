import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ed-info',
  templateUrl: './ed-info.component.html',
  styleUrls: ['./ed-info.component.scss']
})
export class EdInfoComponent {

  @Input() educationInfo: any;

}
