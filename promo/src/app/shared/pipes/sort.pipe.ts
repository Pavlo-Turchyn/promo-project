import { Pipe, PipeTransform } from '@angular/core';
import { CatImg } from '../../core/models/models';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(catImg: CatImg[]): CatImg[] {
    return this.sortCats(catImg);
  }
  sortCats(catImg: CatImg[]): CatImg[] {
    return catImg.sort((a, b): number => this.sortById(a, b));
  }

  sortById(a: CatImg, b: CatImg): number {
    return a.id < b.id ? 1 : -1;
  }
}
