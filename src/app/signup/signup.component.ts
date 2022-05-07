import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup | any;
  FirstName: FormControl | any;
  LastName: FormControl | any;
  Email: FormControl | any;
  Confirm: FormControl | any;
  Password: FormControl | any;
  ConfirmPassword: FormControl | any;
  phone: FormControl | any;

  constructor() {}

  ngOnInit() {
    this.FirstName = new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z]*'),
      Validators.minLength(7),
      Validators.maxLength(10),
    ]);
    this.LastName = new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z]*'),
      Validators.minLength(5),
      Validators.maxLength(10),
    ]);
    this.Email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]);
    this.Confirm = new FormControl('', Validators.required);
    this.Password = new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])'),
    ]);
    this.ConfirmPassword = new FormControl('', [
      Validators.required,
      Validators.min(1),
    ]);
    this.phone = new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]);
    this.myForm = new FormGroup({
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Confirm: this.Confirm,
      Password: this.Password,
      ConfirmPassword: this.ConfirmPassword,
      phone: this.phone,
    });
  }
}


