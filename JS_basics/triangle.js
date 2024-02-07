// Triangle inequality
function triangle(a,b,c)
{
    if((a+b)>c && (b+c)>a && (a+c)>b){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }
}
triangle(3,8,10);
triangle(3,4,1);