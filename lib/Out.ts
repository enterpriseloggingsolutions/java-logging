import { PrintStream } from './PrintStream';

export class Out implements PrintStream {

  public print(txt) {
    process.stdout.write(txt + '');
  }

  public println(txt) {
    console.log(txt);
  }

}