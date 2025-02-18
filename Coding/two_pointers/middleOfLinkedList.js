"use strict";

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function middleNodeOfList(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function buildList(nodes, f) {
  const { value, done } = nodes.next();
  if (done) return null;

  const next = buildList(nodes, f);
  return new Node(f(value), next);
}

function splitWords(s) {
  return s === "" ? [] : s.split(" ");
}

function* main() {
  let input = "1 2 3 4 5 6";
  const head = buildList(splitWords(input)[Symbol.iterator](), parseInt);
  //   console.log(head);
  const res = middleNodeOfList(head);
  console.log(res);
}

main().next();
