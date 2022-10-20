const Scope = require("./scope");
const { walk } = require("./walk");

module.exports = function analyze(ast) {
  const root = new Scope();
  // const scopeStack = [];
  // scopeStack.push(root);

  const scopeAll=[]
  let currentScope=root
  scopeAll.push(currentScope)

  walk(ast, {
    enter: (node) => {
      if (node && node.type === "VariableDeclaration" && node.declarations) {
        node.declarations.forEach((ele) => {
          // scopeStack[scopeStack.length - 1].add(ele.id.name);
          currentScope.add(ele.id.name);
        });
      }

      if (node && node.type === "FunctionDeclaration") {
        const functionScope = new Scope({
          name: node.id.name,
          parent:currentScope,
        });
        currentScope=functionScope
        scopeAll.push(currentScope)
        // const parent = scopeStack[scopeStack.length - 1];
        
        // scopeStack.push(functionScope);
      }
    },

    leave: (node) => {
      if (node && node.type === "FunctionDeclaration") {
        // scopeStack.pop();
        currentScope=currentScope.parent
      }
    },
  });

  return {
    root,
    scopeAll
  }
 
};
