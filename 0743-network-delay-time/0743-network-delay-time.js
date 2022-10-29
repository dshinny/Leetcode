/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// initialize distances, adjList and visited array
// 
var networkDelayTime = function(times, n, k) {
    var dist = new Array(n).fill(Infinity);
    dist[k - 1] = 0;
    var list = dist.map(() => []);
    var heap = new PriorityQueue((a, b) => dist[a] < dist[b])
    heap.push(k - 1);
    for (var i = 0; i < times.length; i++) {
        const source = times[i][0];
        const dest = times[i][1];
        const time = times[i][2];
        list[source - 1].push([dest - 1, time])
    }
    while (!heap.isEmpty()) {
        var curr = heap.pop();
        const neighbors = list[curr];
        neighbors.forEach(neighbor => {
            var neighboringVertex = neighbor[0];
            var weight = neighbor[1];
            if (dist[curr] + weight < dist[neighboringVertex]) {
                dist[neighboringVertex] = dist[curr] + weight;
                heap.push(neighboringVertex);
            }
        })
    }
    const result = Math.max(...dist);
    if (result === Infinity) {
        return -1;
    } else {
        return result;
    }
};

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}