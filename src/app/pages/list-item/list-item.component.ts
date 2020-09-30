import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatImg } from '../../core/models/models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() cat: CatImg;
  @Input() index: number;
  @Output() redirectEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.cat);
  }

  emitRedirectEvent(index: number): void {
    this.redirectEvent.emit(index);
  }
}
