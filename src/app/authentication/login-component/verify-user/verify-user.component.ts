import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent {
  // token!: string;

  // constructor(
  //   private authService: AuthService,
  //   private router: Router,
  //   private route: ActivatedRoute,
  //   private snackBar: MatSnackBar
  // ) {
  //   console.log("entered")
  // }

  // ngOnInit() {
  //   this.token = this.route.snapshot.queryParams['token']; 
  //   console.log("Token retrieved:", this.token);
  //   this.verifyUser();
  // }

  // verifyUser() {
  //   if (this.token) {
  //     const verifyUserToken = { token: this.token };
  //     this.authService.verifyToken(verifyUserToken).subscribe(
  //       () => {
  //         this.snackBar.open('Verify User Successfully!', 'Dismiss', {
  //           duration: 2000
  //         });
  //        this.redirectToLoginPage();
  //       },
  //       error => {
  //         this.snackBar.open(
  //           error.error.message || 'Failed to verify user!',
  //           'Dismiss',
  //           { duration: 2000 }
  //         );
  //         // this.redirectToLoginPage();
  //       }
  //     );
  //   } else {
  //     this.snackBar.open('Token not found', 'Dismiss', {
  //       duration: 2000
  //     });
  //     // this.redirectToLoginPage();
  //   }
  // }
    
  // redirectToLoginPage() {
  //   setTimeout(() => {
  //     this.router.navigate(['authentication/login']);
  //   }, 4000); // 4-second delay (4000 milliseconds)
  // }
}
