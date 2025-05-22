import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  imagePath = 'app/assets/images/logo-empresa.png';
  //alt: string;

  activeTab: 'login' | 'register' = 'login';

  // Login Form
  userName: string = '';
  loginPassword: string = '';

  // Registration Form
  registerEmail: string = '';
  registerPassword: string = '';
  registerConfirmPassword: string = '';

  setActiveTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }

  onLogin() {
    console.log('Login submitted:', this.userName, this.loginPassword);
  }

  onRegister() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      alert("Senhas não conferem!");
      return;
    }
    // console.log('Register submitted:', this.registerEmail, this.registerPassword);
    console.log('Cadastro efetuado com sucesso');
  }
}
