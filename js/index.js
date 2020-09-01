let aList = document.querySelectorAll("#type a"),
  selectList = [],
  choose = document.querySelector("#choose"),
  delBtns = null;

aList.forEach((aItem) => {
  aItem.onclick = function () {
    let par = this.parentNode,
      htmlStr = `你的选择：`,
      val = this.innerText,
      res = null,
      type = parseFloat(par.getAttribute("_type"));
    selectList.length === 0 ? selectList.push({ type, val }) : null;
    res = selectList.find((item) => item.type === type);

    res ? (res.val = val) : selectList.push({ type, val });

    selectList.sort((a, b) => a.type - b.type);
    selectList.forEach((item) => {
      htmlStr += `<mark>
				${item.val}
				<a href="javascript:;" _type="${item.type}">X</a>
			</mark>`;
    });
    choose.innerHTML = htmlStr;
    handleDel();
  };
});

function handleDel() {
  delBtns = document.querySelectorAll("#choose a");
  delBtns.forEach((item) => {
    item.onclick = function () {
      let type = parseFloat(this.getAttribute("_type")),
        htmlStr = `你的选择：`;
      selectList.forEach((item, index) => {
        if (item.type === type) {
          selectList.splice(index, 1);
        }
      });
      selectList.forEach((item) => {
        htmlStr += `<mark>
				${item.val}
				<a href="javascript:;" _type="${item.type}">X</a>
			</mark>`;
      });
      choose.innerHTML = htmlStr;
      handleDel();
    };
  });
}
