import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router ,NavigationExtras } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../auth/auth.service';
// import { EncryptService } from 'src/app/services/encrypt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage!: string;
  hidePassword = true;
  hideConfirmPassword = true;
  FirstName = new FormControl('', [Validators.required]);
  LastName = new FormControl('', [Validators.required]);
  ContactNo = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);
  Designation = new FormControl('', [Validators.required]);
  CompanyName = new FormControl('', [Validators.required]);
  CompanyEmail = new FormControl('', [Validators.required, Validators.email]);
  PersonalEmail = new FormControl('', [Validators.required, Validators.email]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  Password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  loading: boolean = false;
  loadingMessage: string = "Sign Up";
   
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    // private encryptService : EncryptService
  ) {}
  getCompanyNameErrorMessage() {
    if (this.CompanyName.hasError('required')) {
      return 'Company name  is required';
    }
    return this.CompanyEmail.hasError('companyName') ? 'Invalid company name' : '';
  }

   getCompanyEmailErrorMessage() {
    if (this.CompanyEmail.hasError('required')) {
      return 'Email is Required';
    }
    return this.CompanyEmail.hasError('email') ? 'Not a valid email' : '';
  }

  getPersonalEmailErrorMessage() {
    if (this.PersonalEmail.hasError('required')) {
      return 'Email is Required';
    }
    return this.PersonalEmail.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.Password.hasError('required')) {
      return 'Password is required';
    }
    return this.Password.hasError('minlength')
      ? ' 8 characters needed'
      : '';
  }

  getConfirmPasswordErrorMessage() {
    // if (this.confirmPassword.hasError('required')) {
    //   return 'Password is required';
    // }
    // if (this.confirmPassword.hasError('minlength')) {
    //   return '8 characters needed';
    // }
    // if (this.Password.value !== this.confirmPassword.value) {
    //   return 'Passwords do not match';
    // }
    // return '';
  }

  submit(){
    // if (this.CompanyName.valid && this.CompanyEmail.valid && this.ContactNo.valid 
    //   && this.location.valid && this.FirstName.valid && this.LastName.valid 
    //   && this.PersonalEmail.valid && this.Designation.valid && this.Password.valid && this.confirmPassword.valid) {
        
    //   this.loading = true;
    //   this.loadingMessage = "Signing Up...";
      
    //   const registerData = {
    //     CompanyName: this.CompanyName.value, 
    //     CompanyEmail: this.CompanyEmail.value,
    //     ContactNO: this.ContactNo.value,
    //     Location: this.location.value,
    //     FirstName: this.FirstName.value,
    //     LastName: this.LastName.value,
    //     PersonalEmail: this.PersonalEmail.value,
    //     Designation: this.Designation.value,
    //     Password: this.Password.value,
    //   };

    //   this.authService.register(registerData).subscribe(
    //     () => {
    //       // const personalEmail = registerData.PersonalEmail;
    //       // this.redirectToRegVerify(personalEmail);
    //       this.snackBar.open('Registration successful!', 'Dismiss', {
    //         duration: 2000
    //       });
    //     },
    //     (error) => {
    //       this.snackBar.open(
    //         error.error.message || 'Registration failed. Please try again.',
    //         'Dismiss',
    //         { duration: 2000 }
    //       );
    //       this.errorMessage = error.error.message || '';
    //       this.loading = false;
    //       this.loadingMessage = "Sign Up";
    //     }
    //   );
    }
  }

  // redirectToRegVerify(personalEmail: string | null) {
    // if (personalEmail) {
    //    const encryptedEmail = this.encryptService.encryptData(personalEmail);
    //   const queryParams = {
    //     personalEmail: encryptedEmail 
    //   };
    //   const navigationExtras: NavigationExtras = {
    //     queryParams: queryParams
    //   };
    //   this.router.navigate(['/authentication/reg-verify'], navigationExtras);
    // } else {
    //   console.error('Personal email is null');
    // }
  // }
// }
