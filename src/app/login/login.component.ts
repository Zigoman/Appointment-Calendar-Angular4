import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {CheckEmail, MyValidator} from '../shared/form.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private form: FormGroup;
  public http: Http;
  public auth: any;

  constructor(http: Http, auth: AuthService, private router: Router) {
    this.http = http;
    this.auth = auth;

    this.form = new FormGroup({
      company: new FormControl('', [Validators.minLength(4), Validators.required, MyValidator]),
      email: new FormControl('', [Validators.minLength(5), CheckEmail])
    });
  }

  submit() {
    console.log('this.form',this.form.controls.name);
    this.router.navigate(['app'])
  }
  ngOnInit() {
  }
}

