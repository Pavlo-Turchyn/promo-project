import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../../core/services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  index: number;
  catImgUrl: string;
  constructor(
    private router: ActivatedRoute,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.getRouteParams();
    this.subscribeToCatImageUrl();
  }

  subscribeToCatImageUrl(): void {
    this.dataSharingService.catDataObservable.subscribe(
      (catImgUrl: string): void => {
        this.catImgUrl = catImgUrl;
      }
    );
  }

  getRouteParams(): void {
    this.index = Number(this.router.snapshot.params['id']);
  }
}
