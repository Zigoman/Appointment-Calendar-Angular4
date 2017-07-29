import { Component } from '@angular/core';
import {applyMiddleware, combineReducers, compose} from "redux";
import {NgRedux} from "ng2-redux";
import {usersMiddleware} from "../store/middlewares/users.middleware";
import {usersReducer} from "../store/reducers/users.reducer";
import {usersActions} from "../store/actions/users.actions";


const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export interface IAppState {
  users?: any | null,
  loading?: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private store: NgRedux<IAppState>,
              private usersMiddleware: usersMiddleware) {

    this.store.configureStore(combineReducers({
        users: usersReducer
      }),
      composeEnhancers(applyMiddleware(
        this.usersMiddleware.call))
    );

    this.store.dispatch({
      type: usersActions.GET_USER,
      payload: {
        id: 1
      }
    });
  }

  /*ngOnInit() {
    this.store.dispatch({
      type: todosActions.GET_TODO_ITEMS
    });
  }*/
}
