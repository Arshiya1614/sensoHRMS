import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPwdComponent } from './pages/reset-pwd/reset-pwd.component';
import { MailSendComponent } from './login-component/mail-send/mail-send.component';
import { RegVerifyComponent } from './login-component/reg-verify/reg-verify.component';
import { SendVerifyComponent } from './login-component/send-verify/send-verify.component';
import { VerifyUserComponent } from './login-component/verify-user/verify-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AuthenticationLayoutComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    ResetPwdComponent,
    MailSendComponent,
    RegVerifyComponent,
    SendVerifyComponent,
    VerifyUserComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AuthenticationModule { }
