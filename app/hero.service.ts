import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable() // これによりInjectできる物を定義できる。
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly() {
    // Promiseを使ってわざと遅延させている。
    return new Promise<Hero[]>(resolve =>
        setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
      );
  }
}
