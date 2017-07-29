import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {usersActions} from "../actions/users.actions";


@Injectable()
export class usersMiddleware {

  private http: Http;

  constructor(http: Http) {

    this.http = http;

  }

  call = store => next => action => {
    switch (action.type) {

      case usersActions.GET_USER:
/*        this.http.get(`/api/users/${action.payload.id}`)
          .map(res => res.json())
          .subscribe(user => {
            next({
              type: action.type,
                payload: user
            });
          });*/

      default:
        next(action);
    }
  }
  ;
}

