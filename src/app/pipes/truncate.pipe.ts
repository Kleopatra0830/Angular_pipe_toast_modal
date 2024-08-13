import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  // The truncate pipe shortens a string to a specified length and optionally appends a suffix.
  transform(value: string, limit: number = 10, suffix: string = '...'): string {
    if (!value || value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + suffix;
  }

}
