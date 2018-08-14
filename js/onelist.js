function closeOtherLists(index) {
  for (let i = 0; i < lists.length; i++) {
    if (i !== index) {
      lists[i].removeAttribute("open");
    }
  }
}

function oneList(lists) {
  for (let i = 0; i < lists.length; i++) {
    lists[i].setAttribute("onclick", "closeOtherLists(" + i + ")");
  }
}