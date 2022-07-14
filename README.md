# Java Logging

Need a highly maintainable, scalable, general purpose, robust, secure, portable, highly performant, dynamic, simple logger? Look no further.  

We all know that Javascript is an insecure mess. The root of most of your applications problems is your dependency on `console.log` rather than a portable JVM solution like `System`. Make the switch today and see immediate improvements in your application's performance metrics, KPIs, OKRs, and SLOs. 

## Getting Started

```
npm install java-logging
```

## Usage

```ts
import { System } from 'java-logging'

System.out.println("very important business grade log") /* so much more maintinable */
System.out.print("enterprise grade logging") /* far more clean */

System.err.println('NullPointerException on line: 34623132'); /* far more portable than existing loggers */
System.err.print('Perhaps a cute little bug found its way into your server'); /* incredibly scalable */

```