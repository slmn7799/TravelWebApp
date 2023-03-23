import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/api/users/signin';
  private signupUrl = 'http://localhost:3000/api/users/signup';
  private currentUserUrl = 'http://localhost:3000/api/users/currentuser';
  private signOutUrl = 'http://localhost:3000/api/users/signout';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { 

    this.isLoggedIn$ = new BehaviorSubject<boolean>(false);
  }

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

  setIsLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }
}
