import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeckofcardsService } from './deckofcards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpPractice';

 constructor(private http:HttpClient, private DeckSrv:DeckofcardsService){}


test2(){
  this.DeckSrv.getDeck((result:any)=>{
    console.log(result)
  });
}





httpDemo(){
  let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

  this.http.get(url).subscribe((result:any) => {
    console.log(result)
  });
}
  // httpDemo(){
    
  //   let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

  //   let http = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

  //   http.get(url).subscribe((result:any)=>{
  //       console.log(result);
  //   });
  // }
}
