import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ModalExitComponent } from './modal-exit/modal-exit.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [AppComponent, ModalExitComponent],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
