import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'Amar', age:'30', email:'amar@test.com'},
      {name:'Ram', age:'20', email:'ram@test.com'},
      {name:'Sem', age:'28', email:'sem@test.com'},      
    ]
  }
}
