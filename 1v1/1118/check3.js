
/**
 * @param  {string} source
 * @param  {string} pattern
 */

function findSubstr(source, pattern) {
  //增添：pattern 里的字母完全没有重复，如何优化 ？ 
  outer: for (let i = 0; i < source.length; i++) {
    let result = true;
    inner: for (let j = 0; j < pattern.length; j++) {
      if (source[j + i] !== pattern[j]) {
        if (j !== 0) {
          i=i+j-1
        }
        
        // result = false;
        continue outer;
        // break;
      }
    }

    return i 
    // if (result) {
    //   return i;
    // } // 易读性
  }

  return -1;
}


function check3(source, pattern) {
  // mississippi
  //  issip
  // const next = [0,1, 2, 3, 4, 2, 3, 4, 5, 0, 1];
  // aabaabaaaa
  // aabaabaaaa
  // 

//  ababc  i
//      ababc  j
//      ^
//0 00120     next 
  // const next = wkKmp1(pattern);
  const next = wkKmp3(pattern);
  let j = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === pattern[j]) {
      j++;
      if (j === pattern.length) {
        return i - j + 1;
      }
    } else if (j !== 0) {
      j=next[j];//就是它 
      i--
    }
  }
  return -1;
}


console.log(check3("mississippi", "issip"));
console.log(check3("xxxxxaabaabaaab", "aabaabaaab"));
console.log(check3("baabbbbababbbabab","abbab"));

module.exports = {
  findSubstr:check3,
};


//i: aabaabaaab
//j:    aabaabaaab
//           ^
//   01012345        next 

//规则背下来 
//i: aabaabaaab
//j:        aabaabaaab
//            ^
//0  0101234523           next

// from winter 
function wkKmp1(pattern) {
  let next = [0,0]
  for (let i = 1, j = 0; i < pattern.length;i++){
    if (pattern[i] === pattern[j]) {
      j++ 
      next[i+1]=j
    } else if (j === 0) {
      next[i+1] = 0
      // j++
    } else {
      i-- 
      j = next[j]
    }
  }
  return next
}

function wkKmp2(pattern) {
  let next = [0, 0];
  for (let i = 1, j = 0; i < pattern.length;) {
    if (pattern[i] === pattern[j]) {
      i++;
      j++;
      next[i] = j;
    } else if (j === 0) {
      i++;
      next[i] = 0;
      // j++;
    } else {
      j = next[j];
      // i--;
    }
  }
  return next;
}

function wkKmp3(pattern) {
  let next = [0, 0];
  let i = 1, j = 0;
  while ( i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      i++;
      j++;
      next[i] = j;
    } else if (j === 0) {
      i++;
      next[i] = 0;
      // j++; //这里j保持为0 
    } else {
      j = next[j];
    }
  }
  return next;
}


// console.log(wkKmp3("aabaabaaab"));
console.log(wkKmp3("abbab"));

//i abbab
//j   abbab
//    ^
//0 00

//i abbab
//j    abbab
//      ^
//0 00012


//=======================来自leetcode ===> 有问题
function kmp(needle) {
  m = needle.length;
  if (m === 0) {
    return 0;
  }
  const pi = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (needle[i] == needle[j]) {
      j++;
    }
    pi[i] = j;
  }
  // console.log("01:", pi);
  return pi;
};

// console.log(kmp("ab0dabcab0d"));

// console.log(kmp("issip#mississippi"));

// console.log(kmp("issip#issip"));

// console.log(kmp("aabaabaaab#aabaabaaab"));
// console.log(kmp("aabaabaaab"));
