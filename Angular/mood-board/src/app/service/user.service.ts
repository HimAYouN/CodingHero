import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userName: string = ''

  set userName(name: string){
    this._userName = name;
  }
  get userName(){
    return this._userName;
  }

  constructor() { }
}
