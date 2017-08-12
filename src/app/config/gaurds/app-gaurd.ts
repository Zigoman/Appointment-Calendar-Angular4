import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../shared/services/auth/auth.service';


@Injectable()
export class AppGuard implements CanActivate {
  constructor(private auth: AuthService) {
/*    setTimeout(() => {
      this.auth.isValid = true;
    }, 4000)*/
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isValid;
  }

}
