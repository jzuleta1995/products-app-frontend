import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
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
        req = req.clone({
          setHeaders: {
            TOKEN_HEADER: token
          }
        });
      }

      return next.handle(req);
  }
}
