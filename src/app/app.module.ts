import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadCardComponent } from './lead-card/lead-card.component';
import { CanvasserCardComponent } from './canvasser-card/canvasser-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { LocationCardComponent } from './location-card/location-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadCardComponent,
    CanvasserCardComponent,
    DialogBoxComponent,
    LocationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
