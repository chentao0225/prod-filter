let prodFilterModel = (function ($) {
  let $type = $("#type"),
    $choose = $("#choose"),
    $aBtns = null,
    $delBtns = null;
  //   console.log($type);

  let _select = [{ type: 1, val: "苹果" }];
  let _data = [
    {
      type: 1,
      text: "品牌",
      content: [
        "苹果",
        "小米",
        "锤子",
        "魅族",
        "华为",
        "三星",
        "OPPO",
        "vivo",
        "乐视",
        "360",
        "中兴",
        "索尼",
      ],
    },
    {
      type: 2,
      text: "尺寸",
      content: [
        "3.0英寸以下",
        "3.0-3.9英寸",
        "4.0-4.5英寸",
        "4.6-4.9英寸",
        "5.0-5.5英寸",
        "6.0英寸以上",
      ],
    },
    {
      type: 3,
      text: "系统",
      content: ["安卓", "苹果", "微软", "无", "其他"],
    },
    {
      type: 4,
      text: "网络",
      content: ["联通3G", "双卡单4G", "双卡双4G", "联通4G", "电信4G", "移动4G"],
    },
  ];
  function render() {
    let str = ``;
    _data.forEach((item) => {
      let { type, text, content } = item;
      str += `
          <li _type=${type}>
            ${text}：
            ${content
              .map((aItem) => {
                return `<a href="javascript:;">${aItem}</a>`;
              })
              .join()}
          `;
    });
    $type.html(str);
    str = "你的选择：";
    _select.sort((a, b) => a.type - b.type);
    _select.forEach((item) => {
      str += `<mark>
				${item.val}
				<a href="javascript:;" _type="${item.type}">X</a>
			</mark>`;
    });
    $choose.html(str);
    $aBtns = $("#type li a");
    $delBtns = $("#choose a");
    handleSelect();
    handleDel();
  }
  function handleSelect() {
    $aBtns.click(function () {
      let $this = $(this),
        type = parseFloat($this.parent().attr("_type")),
        val = $this.text();
      console.log($this, type);
      _select.forEach((item, index) => {
        if (item.type === type) {
          _select.splice(index, 1);
        }
      });
      _select.push({ type, val });
      render();
    });
  }
  function handleDel() {
    $delBtns.click(function () {
      let $this = $(this),
        type = parseFloat($this.attr("_type"));
      console.log(type);
      _select.forEach((item, index) => {
        if (item.type === type) {
          _select.splice(index, 1);
        }
      });
      render();
    });
  }
  return {
    init() {
      render();
    },
  };
})(jQuery);

prodFilterModel.init();
