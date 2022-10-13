import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardChildService implements CanActivateChild {

  // if you want to activate guard in all the children, then instead of using canActivate- service in all 
  //the individual child, we can use canActivateChild in only the parent component.
  //userRole="user";
   userRole="admin";
  constructor() { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
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
