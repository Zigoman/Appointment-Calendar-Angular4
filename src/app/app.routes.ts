import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './Appointment/dashboard/dashboard.component';
import {ScheduleComponent} from './Appointment/schedule/schedule.component';


export const AppRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'forms'
  },
  {
    path: 'app',
    component: DashboardComponent,
    children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'schedule',
          },
          {
            path: 'schedule',
            component: ScheduleComponent
          }
    ],
   /* canActivate: [AppGuard]*/
  },
  {
    path: 'forms',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'logIn'
      },
      {
        path: 'logIn',
        component: LoginComponent
      },
      /*{
       path: 'signUp',
       component: ,
       }*/
    ]
  }
];
