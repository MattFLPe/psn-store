import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input()
    gameCover:string = ""
    @Input()
    gameLabel:string = ""
    @Input()
    consolePlatform:string = ""
    @Input()
    gamePrice:string = ""

    constructor() { }

  ngOnInit(): void {
    ;
  }

}
