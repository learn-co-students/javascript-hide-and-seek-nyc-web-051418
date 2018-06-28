function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(".target");
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]

  }
  return node;
}

// function increaseRankBy(n) {
//   // unRankList = document.getElementById('app').querySelectorAll('ul.unranked-list li');
//   let rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
//   // for(let i=0; i<unRankList.length; i++) {
//   //  	unRankList[i].innerText = (parseInt(unRankList[i].innerText)+n).toString()
//   // }
//   for(let i=0; i<rankedList.length; i++) {
//    	rankedList[i].innerText = (parseInt(rankedList[i].innerText)+n).toString()
//   }
// }



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
