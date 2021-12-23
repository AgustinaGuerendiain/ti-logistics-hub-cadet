import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
        
    if (localStorage.getItem('UsuarioId')) {
        console.log('Ya estás logueado');
        this.router.navigateByUrl('/home');
        return false;
    }
    return true;
  }
  
}
