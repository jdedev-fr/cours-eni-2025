import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { TestServService } from '../test-serv.service';

@Injectable({
  providedIn: 'root'
})
export class TestGuard2Guard implements CanActivate {
  constructor(private testServ: TestServService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.testServ.ok) {

      return true;
    }
    else {
      this.router.navigate(['/pokedex'])
      return false
    }
  }

}
