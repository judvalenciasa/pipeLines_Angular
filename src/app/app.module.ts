import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitallizePipe } from './pipes/capitallize.pipe';
import { NumToArrPipe } from './pipes/num-to-arr.pipe';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    ReversoPipe,
    CapitallizePipe,
    NumToArrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-Es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
