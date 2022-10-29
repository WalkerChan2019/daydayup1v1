
console.log("我是中国人".replace(/我是(?=中国)/, "rr")) // 输出： 'rr中国人'，匹配的是中国前面的'我是'

console.log("我是中国人".replace(/(?!中国)/, "rr")) // 输出：'rr我是中国人'

console.log("我是中国人".replace(/(?:中国)/, "rr")) // 输出：'我是rr人'，匹配'中国'本身

console.log("我是中国人".replace(/(?<=中国)人/, "rr")) // 输出：'我是中国rr'，匹配的是中国后面的'人'

console.log("我是中国人".replace(/(?<!中国)/, "rr")) // 输出：'rr我是中国人'


