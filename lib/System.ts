import { Out } from './Out';

export class SystemStatic {
  public out: Out;

  public error: Error;

  constructor() {
    this.out = new Out();
    this.error = new Error();
  }

}