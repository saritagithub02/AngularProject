import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Injectable({
  providedIn: 'root',
})
export class DeActivateGuardService
  implements CanDeactivate<ContactUsComponent>
{
  constructor() {}
  hasChanges: boolean = true;
  canDeactivate(
    component: ContactUsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    //throw new Error('Method not implemented.');
    if (this.hasChanges) {
      alert('plz save changes before going to another page..');
      return false;
    } else {
      return true;
    }
  }
}
