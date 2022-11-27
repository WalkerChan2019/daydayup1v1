

const str='(){}[{}]'

let stack=[]
function isValied(str){
  for(let char of str){
    console.log(char);
    switch(char){
      case '[': {
        stack.push(']') 
        break
      }
      case '{': {
        stack.push('}')
        break 
      }
      case '(': {
        stack.push(')')
        break 
      }
      default : if(char !==stack.pop()){
        console.log(char);
        return false
      }
    }
  }
  // console.log(stack);
  return stack.length===0
}

console.log(isValied(str));