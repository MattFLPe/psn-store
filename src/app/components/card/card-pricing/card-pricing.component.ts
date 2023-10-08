import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

    @Input()
    consolePlatform:string = "Digital PS5"

    @Input()
    gamePrice:string = "R$ 149,99"

    constructor(){ }

  ngOnInit(): void {
    ;
  }

}
