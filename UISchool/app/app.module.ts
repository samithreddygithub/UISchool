import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Common
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';

//Componets
import { USERCOMPONENT } from '././user/user.component';
import { COMMONCOMPONENT } from '././common/common.component';
import { USERBINDINGCOMPONENT } from '././userbinding/userbinding.component';

//Services
import { USERBINDINGSERVICE } from './userbinding/userbinding.service';


@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, appRouting ],
  declarations: [ AppComponent, USERCOMPONENT, COMMONCOMPONENT, USERBINDINGCOMPONENT ], //Componets
  providers: [USERBINDINGSERVICE], //Services 
  bootstrap: [ AppComponent ]
})
export class AppModule {}