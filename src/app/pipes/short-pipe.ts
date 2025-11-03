import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true,
})
export class ShortPipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (!value) return '';
    else {
      return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
  }
}
