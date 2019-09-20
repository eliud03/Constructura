import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  form: FormGroup;

  usuario: any = {
    'nombre': '',
    'apellidoPaterno': '',
    'apellidoMaterno': '',
    'correo': '',
    'password': '',
    'rol': '0'
  };

  roles: any = [{
    'id': '1',
    'rol': 'Administrador'
  },
  {
    'id': '2',
    'rol': 'Ventas'
  },
  {
    'id': '3',
    'rol': 'Proveedor'
  }];

  constructor() {
    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'apellidoPaterno': new FormControl('', [Validators.required]),
      'apellidoMaterno': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'password': new FormControl('', [Validators.required]),
      'rol': new FormControl(0, [Validators.required])
    });
  }

  ngOnInit() {
  }

  ingresar() {
    this.usuario = this.form.value;
    console.log(this.usuario);
    this.form.reset();
  }

  cancelar() {
    this.form.reset();
  }

}
