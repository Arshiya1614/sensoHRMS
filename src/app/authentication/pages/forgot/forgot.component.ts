import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router , NavigationExtras} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
// import { EncryptService } from 'src/app/services/encrypt.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  constructor(
    private snackBar: MatSnackBar,
    private router : Router,
    private authService: AuthService,
    // private encryptService: EncryptService
  ){}

email = new FormControl('', [Validators.required, Validators.email]);
errorMessage = '';
loading:boolean = false;
loadingMessage: string  = "Submit";
getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'Email is required';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}
submit(){
  if (this.email.valid) {
    this.loading = true;
    this.loadingMessage = "Submitting...";
    const forgotData = {
      personalEmail: this.email.value,
    };
    // this.authService.forgotPassword(forgotData).subscribe(
    //   () => {
    //     const personalEmail = forgotData.personalEmail;
    //     this.redirectToMailSend(personalEmail);
    //     this.snackBar.open('Reset Password Link send successful!', 'Dismiss', {
    //       duration: 2000
    //     });
    //   },
    //   (error) => {
    //     this.snackBar.open(
    //       error.error.message || 'Failed to send Link. Please try again.',
    //       'Dismiss',
    //       { duration: 2000 }
    //     );
    //     this.errorMessage = error.error.message || '';
    //     this.loading = false;
    //     this.loadingMessage = "Submit";
    //   }
    // );
  }
}

redirectToMailSend(personalEmail: string | null) {
  // if (personalEmail) {
  //    const encryptedEmail = this.encryptService.encryptData(personalEmail);
  //    const queryParams = {
  //     personalEmail: encryptedEmail 
  //   };
  //   const navigationExtras: NavigationExtras = {
  //     queryParams: queryParams
  //   };
  //   this.router.navigate(['/authentication/mail-send'], navigationExtras);
  // } else {
  //   console.error('Personal email is null');
  // }
}
}
