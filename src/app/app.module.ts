import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

//import { HttpModule } from '@angular/http';

import { MessageComponent } from './message/message.component';
import { RecetaComponent } from './receta/receta.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecetaService } from './receta.service';
import { MessageService } from './message.service';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormrecetaComponent } from './formreceta/formreceta.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RecetaComponent,
    DashboardComponent,
    FormrecetaComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
//    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    MessageComponent
  ],
  bootstrap: [AppComponent],
  providers: [MessageService, RecetaService ]

})
export class AppModule { }

