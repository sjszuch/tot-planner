import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.scss']
})
export class LeadCardComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
