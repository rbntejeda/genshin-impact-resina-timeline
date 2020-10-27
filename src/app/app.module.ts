import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import localeEnCL from '@angular/common/locales/es-CL';
registerLocaleData(localeEnCL,'es-CL')
@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:"es-CL"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
