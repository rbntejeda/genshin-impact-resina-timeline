import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import localeEnCL from '@angular/common/locales/es-CL';
import { GuideComponent } from './guide/guide.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeEnCL, 'es-CL')
@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCarouselModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "es-CL"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
