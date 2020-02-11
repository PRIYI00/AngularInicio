import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private builder: FormBuilder) { 
    console.trace('LoginComponent Constructor');

    // Construir Formulario
    this.formulario = this.builder.group({
      // Definir los Valores del Formulario.
      nombre: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
      )],
      password: ['', Validators.compose(
        [Validators.required, Validators.minLength(6), Validators.maxLength(8)]
      )]
    });
  } // Constructor

  ngOnInit() {
    console.trace('LoginComponent ngOnInit');
  } // NgOnInit

  enviar(values: any) {
    console.trace('LoginComponent Enviar Formulario %o ', values);
  }

} // LoginComponent
