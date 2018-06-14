import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
//import { truncate } from 'fs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    /*Array.prototype.contains = function (elem) {
      for (const i in this) {
        if (this[i] === elem) {
          return true;
        }
      }*/

    /*function bull(arr1, arr2) {
      let bulls = { bulls: null, cows: null };
      const bArr = [], cArr = [];
      for (let i = 0; i < arr1.length; i++) {
        if ((arr1[i] === arr2[i]) && (arr1.indexOf(arr1[i]) === arr2.indexOf(arr2[i]))) {
          bArr.push(arr1[i]);
        } else if (arr1[i] in arr1 !== arr2[i] in arr2) {
          cArr.push(arr1[i]);
        }
      }
      bulls = { bulls: bArr.length, cows: cArr.length };
      console.log(bulls);
      return bulls;
    }

    bull([1, 3, 6, 5], [2, 3, 5, 8]);

    function fizzBuzz(input) {
      const f = 'Fizz', b = 'Buzz', out = '';
      for (let i = 1; i <= input; i++) {
        console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
      }
    }

    fizzBuzz(3);
    fizzBuzz(15);

    function removeDuplicate(arr) {
      const exists = {}, outArr = [];
      let elm = 0;
      for (let i = 0; i < arr.length; i++) {
        elm = arr[i];
        if (exists[elm]) {
          outArr.push(elm);
          exists[elm] = true;
        }
      }
      console.log(outArr.length);
      return outArr;
    }

    removeDuplicate([1, 3, 2, 2]);

      const arr = [1, 3, 2, 2];
      let sortedArr = [],
      count = 1;
      sortedArr = arr.sort(function(a, b) {
        return a - b;
      });
      for (let i = 0; i < sortedArr.length; i = i + count) {
        count = 1;
        for (let j = i + 1; j < sortedArr.length; j++) {
          if (sortedArr[i] === sortedArr[j]) {
            count++;
            console.log(count);
          }
        }
      }*/
  }
}
