import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceComma',
  standalone: true
})
export class ReplaceCommaPipe implements PipeTransform {
  transform(value: any): any {
    return value.replace(/,/g, '.');
  }
}
