import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
