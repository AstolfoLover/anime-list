import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedUpper',
})
export class SelectedUpperPipe implements PipeTransform {
  transform(value: string, positions: number[]): string {
    value = value.toLowerCase();
    for (const position of positions) {
      if (position >= 0 && position < value.length) {
        value = value.substring(0,position) + value.charAt(position).toUpperCase() + value.substring(position + 1);
      }
    }
    return value;
  }
}
