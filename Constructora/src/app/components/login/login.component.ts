import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  user: any = {
    'username': '',
    'password': ''
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  ingresar() {
    this.user = this.form.value;
    console.log(this.user);
    this.router.navigate(['/home']);
  }

  cancelar() {
    this.form.reset();
  }

}
