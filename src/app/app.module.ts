import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared-module.module";
import {NgReduxModule} from "ng2-redux";
import {usersMiddleware} from "../store/middlewares/users.middleware";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    NgReduxModule
  ],
  providers: [
    usersMiddleware
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
