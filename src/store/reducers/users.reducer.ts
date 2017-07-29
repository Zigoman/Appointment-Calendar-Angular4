import {usersActions} from "../actions/users.actions";

const userState : any | null = null;

export function usersReducer(state: any | null = userState, action: any) {
  switch (action.type) {

    case usersActions.GET_USER:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}
