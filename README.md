# Java Logging

Need a highly maintainable, scalable, general purpose, robust, secure, portable, highly performant, dynamic, simple logger? Look no further.  

We all know that Javascript is an insecure mess. The root of most of your applications problems is your dependency on `console.log` rather than a portable JVM solution like `System`. Make the switch today and see immediate  improvements in your applications performance metrics, KPIs, OKRs, and SLOs. 

## Usage

```ts
/* This is a fully working example */
import { System } from 'java-logging'

System.out.println("sup") /* so much more maintinable */
System.out.print("hello") /* far more clean */

System.err.println('test');
System.err.print('test');

```