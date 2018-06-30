function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nested = document.getElementById("nested")
  return nested.querySelector(".target")
}

function deepestChild() {
  const gNode = document.getElementById('grand-node');
  let childNodes = gNode.querySelectorAll('*')
  let lastChild = childNodes[childNodes.length - 1]
  return lastChild
  // debugger
}

function increaseRankBy(number) {
  const rankedNodes = document.querySelectorAll('.ranked-list');

  rankedNodes.forEach(list => {
    list.querySelectorAll('li').forEach(element => {
      let value = parseInt(element.innerHTML);
      value += number;
      element.innerHTML = value
      // debugger
    });
    // debugger
  });
}
