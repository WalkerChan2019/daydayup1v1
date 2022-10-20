const Scope = require("./scope");
const { walk } = require("./walk");

module.exports = function analyze(ast) {
  // console.log(ast);
  const root = new Scope();
  
  const scopeStack=[]
  scopeStack.push(root)

  walk(ast, {enter : (node) => {
    if (node && node.type === "VariableDeclaration" && node.declarations) {
      node.declarations.forEach(ele => {
        scopeStack[scopeStack.length-1].add(ele.id.name)
      });
    }
  
    if (node && node.type === "FunctionDeclaration") {
      const parent=scopeStack[scopeStack.length-1]
      const functionScope=new Scope({
        name:node.id.name,
        parent
      })
      scopeStack.push(functionScope)
    }
  }, leave : (node) => {
    if(node && node.type === "FunctionDeclaration"){
      scopeStack.pop()
    }
  }});

  return root;
};
