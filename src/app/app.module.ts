import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared-module.module';
import {NgReduxModule} from 'ng2-redux';
import {usersMiddleware} from '../store/middlewares/users.middleware';
import {RouterModule} from '@angular/router';
import {AppGuard} from './config/gaurds/app-gaurd';
import {AppRoutes} from './app.routes';
import {LoginComponent} from './login/login.component';
import {ScheduleComponent} from './Appointment/schedule/schedule.component';
import {DashboardComponent} from './Appointment/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    usersMiddleware, AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
