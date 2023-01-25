import { TmplAstBoundAttribute } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
        '/assets/food(1).jfif',
        '/assets/food(2).jfif',
        '/assets/food(3).jfif',
        '/assets/food(4).jfif',
        '/assets/food(5).jfif',
        '/assets/food(6).jfif',
        '/assets/food(7).jfif',
        '/assets/food(8).jfif',
    ]
  }
}