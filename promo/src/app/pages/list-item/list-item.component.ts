import { Component, Input, OnInit } from '@angular/core';
import { CatImg } from '../../core/models/models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() cat: CatImg;
  constructor() {}

  ngOnInit(): void {}
}
