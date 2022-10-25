import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public encodePassword(passwordToEncode: string):string{
    let hashPass;
    hashPass = "pass" //se debe encriptar passwordToEncode
    return hashPass;
  }
}
