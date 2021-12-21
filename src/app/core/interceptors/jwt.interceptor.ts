import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@core/services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService){}

  TOKEN_HEADER = 'x-auth-token';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = localStorage.getItem(this.TOKEN_HEADER);
      if(token){
        const headers = new HttpHeaders({
          'x-auth-token': token
        });
        req = req.clone({headers});
      }
      return next.handle(req);
  }
}
