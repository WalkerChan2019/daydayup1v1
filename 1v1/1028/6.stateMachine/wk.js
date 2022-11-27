const HtmlDoublelLabelList = [
  "<div></div>",
  "<p></p>",
  "<a></a>",
  "<title></title>",
  "<body></body>",
  "<head></head>",
  "<html></html>",
];
const htmlListS = [
  "<br/>",
  "<hr/>",
  "<area/>",
  "<base/>",
  "<img/>",
  "<input/>",
  "<link/>",
  "<meta/>",
  "<col/>",
  "<frame/>",
  "<embed/>",
  "<keygen/>",
];

const isSpecialStr = function (input) {
  let reg = /[`~!#$%^&*()_\-+=<>?:\"{}|,.\/;'\\[\]]/g;
  return reg.test(input);
};

const isValidTagStr = function (input) {
  let reg = /[a-z]||[A-Z]||[1-5]/g; //<h1></h1><h5></h5>
  return reg.test(input);
};

// 1- parse标签的前半部分 
//标签开始
let currentTagName = "";
let currentContent = "";
let currentTagAttrs = "";
let isThisTagValid = false;
function parseNewLabel(input) {
  //   console.log("start");
  if (input === "<") {
    return parseTagName;
  } else if (input === " ") {
    return startNewLabel;
  }
}

function parseTagName(input) {//parse标签的前半部（的名称）："<"之后, atrrs或者"/"">"之前 
  //parse标签的名称部分
  if (input === " " && currentTagName==="") {//tagname前的空格
    return parseTagName;
  } else if (isSpecialStr(input)) {
    if (input === ">") {
      //前半部分结束
      return tagLeftEnd
    } else if (input === "/") {
      //单标签（可能是） <input  /  >
      return isValidSingleLabel;
    } else {
      //如果是其它特殊字符，不是有效标签，终结
      currentTagName = "";
      return (isThisTagValid = false);
    }
  } else if (isValidTagStr(input)) {
    currentTagName += input;
    return parseTagName;
  } else if (input === " " && currentTagName !== "") {
    //tagname后出现空格
    return parseTagAttrs;
  }
}
function parseTagAttrs(input) {
  //parse标签名称后面的attrs
  if (input==="/") {
    //单标签 <input value="789"  /  >
  } else if (input===">") {
    // 标签左半部分结束
    return parseContent
  } else {
    currentTagAttrs += input
    return parseTagAttrs
  }
  
}



function isValidSingleLabel() {
  
}

function parseContent() {}

// 其它模块
// 2- parse标签的内容部分 
// 3- parse标签的后半部分 
{
  function parseTageAttrs() {
    //parse标签的属性部分
  }

  // 只提取htmp标签名称
  function extractHtmlLabelNamesOnly() {
    const arry = [];

    return arry;
  }

  // 提取htmp标签名称+内容：关键
  function extractHtmlLabels() {
    const arry = [];

    return arry;

    var a = [
      ({
        tagname: "body",
        children: [
          {
            tagname: "text",
            content: "我还是个宝宝呢",
          },
        ],
      },
      {
        tagname: "div",
        children: [
          {
            tagname: "p",
            content: "123456",
          },
          {
            tagname: "meta",
            attrs: `charset="UTF-8"`,
          },
          {
            tagname: "input",
            attrs: `type="password" value="123456"`,
          },
        ],
      }),
    ];
  }

  // 判断有效的双标签 <title>Document</title>
  const { isValidDoubleLabel } = require("./isValidDoubleLabel.js");

  // 判断有效的单标签  <meta charset="UTF-8" />
  function isValidSingleLabel() {}

  // 判断只含有text标签：<div>123456</div>

  // 判断含有子标签的标签: <div>123<p>456</p></div>

  function judge() {}
  function parseHTML() {}
}


module.exports = { parseNewLabel };
