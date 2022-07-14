export class Out {

  public print(txt: string) {
    process.stdout.write(txt);
  }

  public println(txt) {
    console.log(txt);
  }

}