function findNeedle(n,h) {
    if(h.includes(n)) {
        console.log(h.indexOf(n))
    }else {
        console.log("-1")
    }
}
var n = "sad"
var h = "sadbutsad"
findNeedle(n,h)
var n = "leeto"
var h = "leetcode"
findNeedle(n,h)