import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Login } from 'src/app/shared/models/Login.model';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  @Output() sendFailLoginError: EventEmitter<any> = new EventEmitter<any>();

  login: Login = new Login();
  dispReg: boolean = false;

  constructor(private readonly authServ: AuthService) {}

  ngOnInit(): void {
    this.resetFields();
    this.focusUserInput();
  }

  getValue(event: any) {
    return event.target.value;
  }

  entrar() {
    this.authServ.login(this.login).catch((error) => {
      this.sendFailLoginMessage(error);
    });
  }

  sendFailLoginMessage(error: any) {
    this.sendFailLoginError.emit(error);
    this.login = new Login();
  }

  resetFields() {
    this.login = new Login();
  }

  focusUserInput() {
    document.getElementById('user-input')?.focus();
  }

  focusPassInput() {
    document.getElementById('pass-input')?.focus();
  }

}
