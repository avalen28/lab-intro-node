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

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
