import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URI = environment.baseURL + "/auth";
  TOKEN_HEADER = 'x-auth-token';

  constructor(private http: HttpClient,
              private router: Router) { }

    login(username: string, password: string){
     return this.http.post(this.BASE_URI, {username, password}).pipe(map((res: any) => {
      localStorage.setItem(this.TOKEN_HEADER, res.token);
      return res;
     }));
    }

    logout(){
      localStorage.removeItem(this.TOKEN_HEADER);
      this.router.navigate(['/login']);
    }

    public get isLogIn(): boolean {
      return (localStorage.getItem(this.TOKEN_HEADER) !== null);
    }
}
