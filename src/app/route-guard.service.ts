import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
//userRole="admin";
userRole="admin";
  constructor() { }
  canActivate() {
    //throw new Error('Method not implemented.');
    if(this.userRole=="admin"){
      return true;
    }
    else 
    {
      alert("you are not allowed to visit this route");
      return false;
    }
  }
}
