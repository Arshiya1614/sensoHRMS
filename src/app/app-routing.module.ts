import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLayoutComponent } from './authentication/authentication-layout/authentication-layout.component';

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '**', // Fallback route
    redirectTo: 'authentication', // Or your preferred default path
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
