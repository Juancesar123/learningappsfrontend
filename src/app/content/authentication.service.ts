import { Injectable } from '@angular/core';
import { FeathersService } from './feathers.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _feathers:FeathersService,private _router:Router) { }
  
  public logIn(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  public logOut() {
    this._feathers.logout();
    this._router.navigate(['/']);
  }
}
