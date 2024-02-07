function findElement(a,n,k) {
    if(a.includes(k)){
        console.log(a.indexOf(k))
    }else {
        for(i=0;i<n;i++) {
            if(a[i]>k) {
                r = i
                break
            }else {
                r = n
            }
    }
    console.log(r)
    }
}
var a = [1,3,5,6]
var n = a.length
var k = 5
findElement(a,n,k)
var a = [1,3,5,6]
var n = a.length
var k = 2
findElement(a,n,k)


