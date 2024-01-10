import { Component, OnInit } from '@angular/core';
import { map, of, take, tap } from 'rxjs';

@Component({
  selector: 'pm-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    of(1,2,3,4)
      .pipe( 
        tap ( x => console.log(`input is ${x}`) ),
        map( x => x*3),
        take(3))
      .subscribe( (item) => console.log( `Times 3 is ${item}`))
    ;
  }

}
