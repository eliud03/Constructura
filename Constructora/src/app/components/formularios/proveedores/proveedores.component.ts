import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {

  form: FormGroup;

  proveedor: any = {
    'nombre': '',
    'direccion': '',
    'telefono': '',
    'correo': '',
    'proyecto': '0'
  };

  proyectos: any = [{
    'id': '1',
    'nombre': 'Proyecto 1'
  },
  {
    'id': '2',
    'nombre': 'Proyecto 2'
  },
  {
    'id': '3',
    'nombre': 'Proyecto 3'
  }];

  constructor() {
    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'direccion': new FormControl('', [Validators.required]),
      'telefono': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'proyecto': new FormControl(0, [Validators.required])
    });
  }

  ngOnInit() {
  }

  ingresar() {
    this.proveedor = this.form.value;
    console.log(this.proveedor);
    this.form.reset();
  }

  cancelar() {
    this.form.reset();
  }

}
