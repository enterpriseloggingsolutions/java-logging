import { Err } from './Err';
import { Out } from './Out';

export class SystemStatic {
  
  public out: Out;
  public err: Err;

  constructor() {
    this.out = new Out();
    this.err = new Err();
  }

}