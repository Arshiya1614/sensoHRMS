import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.component.html',
  styleUrls: ['./authentication-layout.component.css']
})
export class AuthenticationLayoutComponent implements OnInit {
  showLogoAndText: boolean = false;

  constructor(private router : Router){}

  ngOnInit(): void {
    const displayUrls = ['/authentication/login' ,'/authentication/register' ,'/authentication/forgot','/authentication/reset-pwd','/authentication/send-verify'];
    const currentUrl = this.router.routerState.snapshot.url;
    this.showLogoAndText = displayUrls.includes(currentUrl);
  }
}
