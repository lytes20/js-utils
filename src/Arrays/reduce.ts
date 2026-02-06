const numbers = [10, 20, 20, 50];

const result = numbers.reduce((prev, curr) => prev + curr, 0);

console.log('result', result);

interface Array<T> {
  myReduce<U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U;
}

interface NewArray<T> {
  myReduce<U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc = initialValue;
  let i = 0;
  while (i < this.length) {
    acc = callbackFn.apply(null, [acc, this[i]]);
    i++;
  }
  return acc;
};

const res = numbers.myReduce((prev, curr) => prev + curr, 0);
console.log('res', res);
