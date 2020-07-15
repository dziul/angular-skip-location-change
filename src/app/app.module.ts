import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
