import { MathOperation } from "./MathOperation";

export class MedianFromArray implements MathOperation {
  private _arrayOfNumbers: number[];
  constructor(arrayOfNumbers: number[]) {
    this._arrayOfNumbers = arrayOfNumbers
  }

  run = (): number => {
    const half = Math.floor(this._arrayOfNumbers.length / 2);
    this._arrayOfNumbers.sort(function(a, b) { return a - b;});
  
    if (this._arrayOfNumbers.length % 2) {
      return this._arrayOfNumbers[half];
    } else {
      return this._arrayOfNumbers[half];
    }
  }
}