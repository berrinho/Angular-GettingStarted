import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//stops navigation to a route if an invalid is passed
export class ProductDetailGuard implements CanActivate {
  constructor(private router:Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var id = Number(route.paramMap.get("id"))
    if (isNaN(id) || id == 0 ){
      alert("not a valid id number");
      this.router.navigate(["/productlist"]);
    }  

    return true;
  }
  
}


