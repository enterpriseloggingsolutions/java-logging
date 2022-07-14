import { PrintStream } from "./PrintStream";

export class Out implements PrintStream {

  public print(txt: string) {
    process.stdout.write(txt);
  }

  public println(txt) {
    console.log(txt);
  }

}