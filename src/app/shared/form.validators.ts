import {FormControl} from '@angular/forms';

const REGEX_EXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function MyValidator(control: FormControl) {
  if (control.value.toLowerCase() !== 'zigoman') {
    return {
      notZigoman: true
    };
  }
  return null;
}

export function CheckEmail(control: FormControl) {
  if (REGEX_EXP.test(control.value)) {
    return {
      emailInvalid: true
    };
  } else {
    return {
      emailInvalid: true
    };
  }
}
