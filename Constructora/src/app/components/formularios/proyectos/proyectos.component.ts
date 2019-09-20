import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent implements OnInit {

  form: FormGroup;

  proyecto: any = {
    'nombre': '',
    'direccion': '',
    'descripcion': '',
    'imagen': ''
  };

  constructor() {
    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'direccion': new FormControl('', [Validators.required]),
      'descripcion': new FormControl('', [Validators.required]),
      'imagen': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  ingresar() {
    this.proyecto = this.form.value;
    console.log(this.proyecto);
    this.form.reset();
  }

  cancelar() {
    this.form.reset();
  }

}
