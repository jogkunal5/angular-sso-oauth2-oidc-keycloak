import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  name: string;

  constructor(private oauthService: OAuthService) { }

  getUsername() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (claims) {
      this.name = claims['name'];
    }
    return this.name;
  }
}
