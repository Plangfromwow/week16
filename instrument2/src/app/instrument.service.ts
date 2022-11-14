import { Injectable } from '@angular/core';
import { Instrument } from './instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

TheList:Instrument[] = [
  {type:'Piano',color:'Black',year:1998},
  {type:'Suprano Sax',color:'Gold',year:1955}
];

  constructor() {}

  get():Instrument[]{
    return this.TheList;
  }

  delete(){
    
  }
}
