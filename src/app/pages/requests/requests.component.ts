import { CardItemDTO } from './../../models/card-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  protected cards: CardItemDTO[]

  constructor() { }

  ngOnInit() {
    this.cards = [
      { value: "Cesantias", icon: "pe-7s-piggy"},
      { value: "Licencias", icon: "pe-7s-note2"},
      { value: "Permisos", icon: "pe-7s-id"},
      { value: "Prestamos", icon: "pe-7s-server"},
      { value: "Auxilios", icon: "pe-7s-help2"},
    ]
  }

}
