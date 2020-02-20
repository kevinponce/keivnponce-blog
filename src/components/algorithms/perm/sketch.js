async function perm(ar, l = 0, r = ar.length - 1, opts = [], path = []) {
  if (l === r) {
    opts.push(ar);
  } else {
    for (let i = l; i <= r; i++) {
      swap(ar, i, l)
      root.add(path.concat([i]), ar.slice(0));
      if (i === l) {
        // add others that will be added in future so animations stay in place
        for (let j = l + 1; j <= r; j++) {
          root.add(path.concat([j]), []);
        }
      }

      await sleep(1000)
      await perm(ar.slice(0), l + 1, r, opts, path.concat([i]))
      swap(ar, l, i)
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }

  add(path, value) {
    const index = path.shift();

    if (path.length === 0) {
      this.descendents[index] = new TreeNode(value)
    } else {
      this.descendents[index].add(path, value);
    }
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const array = ['a', 'b', 'c'];
const root = new TreeNode(array.slice(0));

export default function(p) {
  const height = 300;
  const width = 500;
  const lineLength = 20;

  p.setup = function() {
    p.createCanvas(width, height);

    perm(array);
  };

  p.draw = function() {
    p.background(220);
    p.drawTree(root, 0, 0, width, 100);
  };

  // p.drawTree(root, 0,0, width, 100)
  p.drawTree = function(node, x1, y1, x2, y2) {
    const itemWidth = x2 - x1;
    const itemHeight= y2 - y1;
    if (node) {
      p.textAlign(p.CENTER, p.CENTER);
      p.text(node.value.join(','), (itemWidth) / 2 + x1, (y2 -y1) / 2 + y1);

      const descendents = node.descendents.filter(descendent => typeof descendent !== 'undefined');
      const childItemWidth = itemWidth / (descendents.length);

      for(let i = 0; i < descendents.length; i++) {
        const nextNode = descendents[i];
        const nextX1 = childItemWidth * i + x1;

        p.drawTree(nextNode, nextX1, y2, nextX1 + childItemWidth, y2 + itemHeight)
      }
    }
  }
}

