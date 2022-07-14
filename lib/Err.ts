export class Err {

  public print(txt: string) {
    process.stderr.write(txt);
  }

  public println(txt) {
    console.error(txt);
  }
}