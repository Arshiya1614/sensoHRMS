import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { MailSendComponent } from './login-component/mail-send/mail-send.component';
import { RegVerifyComponent } from './login-component/reg-verify/reg-verify.component';
import { SendVerifyComponent } from './login-component/send-verify/send-verify.component';
import { VerifyUserComponent } from './login-component/verify-user/verify-user.component';
import { ResetPwdComponent } from './pages/reset-pwd/reset-pwd.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path :'forgot', component: ForgotComponent},
   {path : 'mail-send', component: MailSendComponent},
   {path : 'reg-verify' , component: RegVerifyComponent},
   {path : 'send-verify' , component: SendVerifyComponent},
   {path : 'verify-user' , component: VerifyUserComponent},
   {path : 'reset-pwd' , component:ResetPwdComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
