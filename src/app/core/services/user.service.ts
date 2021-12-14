import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = environment.baseURL + '/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.BASE_URL, user);
  }
}
