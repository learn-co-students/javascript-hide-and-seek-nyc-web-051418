function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nested = document.getElementById("nested")
  return nested.querySelector(".target")
}

function deepestChild() {
  const gNode = document.getElementById('grand-node');
  let childNodeArray = gNode.querySelectorAll('*')
  let lastChild = childNodeArray[childNodeArray.length - 1]
  return lastChild
  // debugger
}

function increaseRankBy(number) {
  const rankedArray = document.querySelectorAll('.ranked-list');

  rankedArray.forEach(list => {
    list.querySelectorAll('li').forEach(element => {
      let value = parseInt(element.innerHTML);
      value += number;
      element.innerHTML = value
      // debugger
    });
    // debugger
  });
}
