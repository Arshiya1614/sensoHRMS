import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLayoutComponent } from './authentication/authentication-layout/authentication-layout.component';

const routes: Routes = [
  {
    path: 'authentication',
    component :AuthenticationLayoutComponent,
    children : [
      {
        path:'',loadChildren: () =>
          import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
