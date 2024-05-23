import { CardItemDTO } from './../../models/card-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() cards: CardItemDTO[]

  constructor() { }

  ngOnInit(): void {
  }

  public onCardClick(card: CardItemDTO): void {
    console.log('Card clicked:', card);
  }

}
