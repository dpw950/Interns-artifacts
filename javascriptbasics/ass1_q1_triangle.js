function isTriangle(a,b,c) {
    if(((a+b)>c)&&((b+c)>a)&&((c+a)>b)) {
        console.log("Valid - Triangle can be formed")
    } else {
        console.log("Invalid - Triangle cannot be formed")
    }
}
isTriangle(3,8,10)
isTriangle(3,4,1)