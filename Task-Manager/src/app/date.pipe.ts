import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datetransform'})


// tslint:disable-next-line:class-name
export class dateTransformPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    value = value.slice(0, 10);
    const arr = value.split("-");
    value = arr[2] + "/" + arr[1] + "/" + arr[0];
    return value;
  }
}
