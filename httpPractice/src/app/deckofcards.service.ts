import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckofcardsService {

  constructor(private http:HttpClient) {}
// write a function that gets a deck of cards
  getDeck(cb:any){
  
  // let cb = (result:any) => {
  //   console.log(result);
  // }
  
    let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    this.http.get(url).subscribe(cb);
  }



}
