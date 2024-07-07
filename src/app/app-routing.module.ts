import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 }
