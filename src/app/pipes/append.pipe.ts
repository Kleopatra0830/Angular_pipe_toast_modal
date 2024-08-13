import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  //The append pipe adds a specified string to the end of the input string.
  transform(value: string, appendText: string): string {
    return value + appendText;
  }

}
