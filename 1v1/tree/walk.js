function walk(ast, { enter, leave }) {
  function parse(tree) {
    // console.log("-----tree-----", tree, typeof tree);
    if (typeof tree === "object") {
      enter(tree);
      for (let key in tree) {
        parse(tree[key]);
      }
      leave(tree);
    }
  }
  parse(ast);
  console.log(stack);
}

let stack = [];



const parseVariables = function (node) {
  const variables = node.declarations.map((ele) => ele.id.name).join("");// \n
  return variables;
};

function enter(node) {
  if (node && node.type === "VariableDeclaration" && node.declarations) {
    // stack.push(parseVariables(node));
    console.log(`${stack.join('')}${node.declarations.map(it => it.id.name).join(',')}`)
  }

  if (node && node.type === "FunctionDeclaration") {
    const des = `${node.id.name} => `
    stack.push(des);
  }
}

function leave(node) {
  if (node && node.type === "FunctionDeclaration") {
    console.log(stack);
    stack.pop();
  }
}


// console.log(typeof []);

// const ast = {
//   a: 1,
//   a2: [{ b: "2" }],
// };

// const ast=2

// const ast=require('./ast')
// console.log(ast);

// walk(ast, {
//   enter,
//   leave,
// });

module.exports = { walk, enter, leave };

// const a=2
// for(let k in a){
//   if(k){
//     console.log(k,a[k]);
//   }
// }



// console.log([1,2,3,4].join(','));