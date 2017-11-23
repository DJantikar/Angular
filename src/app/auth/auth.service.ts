import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
   // username : aa@aa.com
   //pwd : aaaaaa
  constructor(private router:Router) { }
  token : string = null;
  signupUser(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(
              error => console.log(error)
            );
  }
  signinUser(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
              (response)=> {
                            firebase.auth().currentUser.getToken()
                            .then(
                              (tk : string) => { this.token=tk } 
                            );
                            
                            this.router.navigate(['/']);
                            }
                
            )
            .catch(
              error => console.log(error)
            );
  }
  getToken(){
    firebase.auth().currentUser.getToken()
                   .then(
                    (tk : string) => { this.token=tk } 
                   );
    return this.token;    
  }

  isAuthenticated(){
    return this.token != null ;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }
}
