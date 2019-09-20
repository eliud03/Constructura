import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styles: []
})
export class OrdenesComponent implements OnInit {
  
  form: FormGroup;

  orden: any = {
    'proyecto': 0,
    'proveedor': 0,
    'medioPago': 0,
    'fecha': '',
    'folio': ''
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

  proveedores: any = [{
    'id': '1',
    'nombre': 'Proveedor 1'
  },
  {
    'id': '2',
    'nombre': 'Proveedor 2'
  },
  {
    'id': '3',
    'nombre': 'Proveedor 3'
  }];

  mediosPago: any = [{
    'id': '1',
    'nombre': 'Efectivo'
  },
  {
    'id': '2',
    'nombre': 'Deposito'
  },
  {
    'id': '3',
    'nombre': 'Transferencia'
  }];

  constructor() {
    this.form = new FormGroup({
      'proyecto': new FormControl('', [Validators.required]),
      'proveedor': new FormControl('', [Validators.required]),
      'medioPago': new FormControl('', [Validators.required]),
      'fecha': new FormControl('', [Validators.required]),
      'folio': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  ingresar() {
    this.orden = this.form.value;
    console.log(this.orden);
    this.form.reset();
  }

  cancelar() {
    this.form.reset();
  }

}
