import { PrintStream } from './PrintStream';

export class Err implements PrintStream {

  public print(txt) {
    process.stderr.write(txt);
  }

  public println(txt) {
    console.error(txt);
  }
}