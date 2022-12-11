class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function (a, b) {
      return a - b;
    });
  }
  get(pos) {
    if (this.length <= pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    // on min(), I use a shorted method. same results.
    let maxVal = 0;
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    for (let i = 0; i < this.length; i++) {
      if (this.items[i] > maxVal) {
        maxVal = this.items[i];
      }
    }
    return maxVal;
  }

  min() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    this.items.sort(function (a, b) {
      return a - b;
    });
    return this.items[0];
  }
  sum() {
    return this.items.reduce((previous, current) => {
      return previous + current;
    }, 0);
  }

  avg() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
