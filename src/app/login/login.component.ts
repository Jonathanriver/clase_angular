import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  titleLogin = 'Loguin';
  emailUser = 'Correo electronico';
  passwordUser = 'Contraseña';
  inUser = 'Ingresar';
  rememberUser = 'Recordarme';
  nombre: string = '';
  password: string='';
  texto: string = '';
  messages_error_field: String = '';
  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  messages_error_field_2: string = '';
  messages_error_field_3: string = '';


  Mostrar() {
    if (this.nombre == '' || this.nombre == null || this.nombre == undefined) {
      this.messages_error_field = 'EL campo "Email" no puede ser vacio.';
      this.show = true;
    } else {
      this.validateEmail(this.nombre);
      this.show = false;
    }

    if (this.password == '' || this.password == null || this.password == undefined) {
      this.messages_error_field_3 = 'EL campo "Password" no puede ser vacio.';
      this.show3 = true;
    } else {
      this.show3 = false;
    }
  }


  validateEmail(texto: string) {

    // Get our input reference.
    let emailField = texto;

    // Define our regular expression.
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(emailField)) {
      this.show2 = false;
      return true;
    } else {
      this.messages_error_field_2 = "El dato no es valido";
      this.show2 = true;
      return false;
    }
  }


}
