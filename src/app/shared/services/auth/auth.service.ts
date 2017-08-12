import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  private _islogged: boolean;

  constructor() {
    this._islogged = false;
  }

  get isValid() {
    return this._islogged;
  }

/*  set isValid(value) {
    this._islogged = value;
  }*/
}
