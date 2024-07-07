import { Component, Input } from '@angular/core';

import * as locdata from '../../assets/loc.json';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
  
  data: any = locdata;

  locations: any[] = this.data.locations;
  
}
