import { ItemComponent } from './item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSharingService } from '../../core/services/data-sharing/data-sharing.service';
import { ActivatedRoute } from '@angular/router';

let component: ItemComponent;
let fixture: ComponentFixture<ItemComponent>;
let h3: HTMLElement;
describe('ItemComponent', () => {
  let mockActivatedRoute = {
    snapshot: {
      params: {
        id: 1,
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      providers: [
        DataSharingService,
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    });
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.index = 1;
    h3 = fixture.nativeElement.querySelector('h3');
  });
  it('should display title "My index is 1"', () => {
    fixture.detectChanges();
    expect(h3.textContent).toContain('My index is 1');
  });
});
