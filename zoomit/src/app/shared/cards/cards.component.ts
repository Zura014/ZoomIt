import { Component, Input } from '@angular/core';
import { Card } from '../types/card.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() cardData!: Card;
}
