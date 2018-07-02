function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nested = document.getElementById('nested')
  return nested.getElementsByClassName('target')[0]
}

function deepestChild() {
  const grandNode = document.getElementById('grand-node')
  const list = grandNode.querySelectorAll('div')
  return list[list.length-1]
}


// function deepestChild() {
//   let node = document.getElementById('grand-node')
//   let nextNode = node.children[0]
//
//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }
//
//   return node
// }

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (Number.parseInt(lis[i].innerHTML)+n).toString()
  }
}
