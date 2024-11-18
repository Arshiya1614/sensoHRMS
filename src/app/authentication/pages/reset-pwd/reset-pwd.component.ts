import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {
  token!: string;
  hidePassword = true;
  hideConfirmPassword = true;
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
 
  constructor(
    private authService : AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'];  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return this.password.hasError('minlength')
      ? 'Password should be at least 8 characters long'
      : '';
  }

  getConfirmPasswordErrorMessage() {
    if (this.confirmPassword.hasError('required')) {
      return 'Confirm Password is required';
    }
    if (this.confirmPassword.hasError('minlength')) {
      return 'Password should be at least 8 characters long';
    }
    if (this.password.value !== this.confirmPassword.value) {
      return 'Passwords do not match';
    }
    return '';
  }
 

  submit(){
    if (this.token) {
      const resetData = { 
        token: this.token ,
        password: this.password.value
      };
      // this.authService.resetPassword(resetData)
      //   .subscribe(
      //     () => {
      //       this.snackBar.open('Password Update Successfully!', 'Dismiss', {
      //           duration: 2000
      //         });
      //       this.redirectToLoginPage();
      //     },
      //     error => {
      //       this.snackBar.open(
      //         error.error.message || 'Failed to update password!',
      //         'Dismiss',
      //         { duration: 2000 }
      //       );
      //       this.redirectToLoginPage();
      //     }
      //   );
    } else {
      this.snackBar.open('Token not found', 'Dismiss', {
        duration: 2000
      });
      this.redirectToLoginPage();
    }
  }
    
  redirectToLoginPage() {
    setTimeout(() => {
      this.router.navigate(['/authentication/login']);
    }, 2000); 
  }
}
