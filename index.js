
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div.target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  const lis = document
  .querySelectorAll('#app ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
  let num = parseInt(lis[i].innerHTML);
  lis[i].innerHTML = (num + n).toString();
  }
}
