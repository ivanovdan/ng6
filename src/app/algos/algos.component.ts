import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algos',
  templateUrl: './algos.component.html',
  styleUrls: ['./algos.component.scss']
})
export class AlgosComponent<T> implements OnInit {
  constructor() {
  }
  stack: T[] = [];
  queue: T[] = [];
  hashTable: {} = {};
  primeNumber: boolean;
  factors: T[] = [];
  fibo: number;

  push(val: T) {
    this.stack.push(val);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  stackCount(): number {
    return this.stack.length;
  }

  enqueue(val: T) {
    this.queue.push(val);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  queueCount(): number {
    return this.queue.length;
  }

  isPrime(n): boolean {
    let divider = 2;
    while (n > divider) {
      if (n % divider === 0) {
        this.primeNumber = false;
        return false;
      } else {
        divider++;
      }
    }
    this.primeNumber = true;
    return true;
  }

  primeFactors(n: number) {
    const factors = [];
    let divider = 2;

    while (n > 2) {
      if (n % divider === 0) {
        factors.push(divider);
        n = n / divider;
      } else {
        divider++;
      }
    }
    this.factors = factors;
    return factors;
  }

  fibonacci(n: number) {
    const fibo = [0, 1];
    if (n <= 2) {
      return 1;
    }

    for (let i = 2; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    this.fibo = fibo[n];
    return fibo[n];
  }

  ngOnInit() {

  }

}
