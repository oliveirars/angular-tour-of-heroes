import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../model/hero';
import { HEROES } from '../server/mock-heroes';
import { MessageService } from "../service/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
