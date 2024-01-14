import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuracion del locale de la app para la fecha en español
import localEsBO from '@angular/common/locales/es-BO';
import localfrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsBO);
registerLocaleData(localfrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Prime ng necesita de animation para funcionar
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-BO'}  //establecer la fecha en toda la aplicacion
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
