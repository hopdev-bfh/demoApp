import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'magicpipe'
})
export class MagicpipePipe implements PipeTransform {

  transform(value: string): string {
    const intValue = parseInt(value);

    if (isNaN(intValue)) {
      return "The inserted text is not an integer"
    }
    const index9 = value.indexOf("9");
    if (index9 < 0) {
      return "The given string contains at least a 9";
    }
    if (value.length < 3) {
      return "The given string should at least 3 characters long";
    }

    return "Validated";
  }
}
