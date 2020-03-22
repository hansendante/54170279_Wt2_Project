import { Injectable } from '@angular/core';
import { Pokeshop } from './pokeshop';
import { Observable, of } from "rxjs";
import { ITEMS } from './pokeshopData';

@Injectable({
  providedIn: 'root'
})
export class PokeshopService {
  private pokeshop: Array<Pokeshop> = ITEMS;
  constructor() {}

  getPokemons(): Observable<Pokeshop[]> {
    return of(this.pokeshop);
  }

  getPokemon(id: number): Pokeshop {
    return this.pokeshop.find(pokeshop => (pokeshop.id = id));
  }
}
