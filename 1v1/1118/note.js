
// 21:19
// 拾月
//字符串里找串
/**
 * source 目标字符串
 * pattern 待匹配的字符串
 * @param {*} source 
 * @param {*} pattern 
 */
 function findSubStr(source,pattern){
    outer:for(let i=0; i<source.length; i++){
        for(let j =1; j<pattern.length; j++){
            if(source[i] !== pattern[j]){
                continue outer;
            }     
            return i    
        }
    }
    return -1
}
function findSubStr2(source,pattern){
    let j=0;
    for(let i=0;i<source.length;i++){
        if(source[i]=== pattern[j]){
            j++;
            if(j === pattern.length){
                return i-j +1;//index结束位
            }
        } else if(j !==0){
            j = 0;
            i--;
        }
    }
    return -1;
}

function findSubStr3(source,pattern){
    let j=0;
    next=[0,0,1,0,1,2,3,0]
    for(let i=0;i<source.length;i++){
        if(source[i]=== pattern[j]){
            j++;
            if(j === pattern.length){
                return i-j +1;//index结束位
            }
        } else if(j !==0){
            j = next[j];
            i--;
        }
    }
    return -1;
}
module.exports = {
    findSubStr,
    findSubStr2,
    findSubStr3
} 


// winter

// https://github.com/wintercn/kmp-demo


