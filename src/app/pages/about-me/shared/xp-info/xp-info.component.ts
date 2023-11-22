import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-info',
  templateUrl: './xp-info.component.html',
  styleUrls: ['./xp-info.component.scss']
})
export class XpInfoComponent implements OnInit {

  @Input() jobInfo: any;

  ngOnInit(): void {
  }


}
