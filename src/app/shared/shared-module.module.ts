import {NgModule} from "@angular/core";
import {AuthService} from './services/auth/auth.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [
    AuthService
  ]
})

export class SharedModule {
}
