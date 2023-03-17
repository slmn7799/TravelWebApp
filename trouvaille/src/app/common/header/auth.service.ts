import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/api/users/signin';
  private signupUrl = 'http://localhost:3000/api/users/signup';
  private currentUserUrl = 'http://localhost:3000/api/users/currentuser';
  private signOutUrl = 'http://localhost:3000/api/users/signout';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }

  signup(credentials: any): Observable<any> {
    return this.http.post<any>(this.signupUrl, credentials);
  }

  currentUser(){
    return this.http.get<any>(this.currentUserUrl);
  }

  signOut(credentials: any): Observable<any> {
    return this.http.post<any>(this.signOutUrl, credentials);
  }
}
