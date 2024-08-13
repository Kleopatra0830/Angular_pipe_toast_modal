import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  // The multiply pipe multiplies a number by a specified factor.
  transform(value: number, factor: number = 1): number {
    return value * factor;
  }

}
