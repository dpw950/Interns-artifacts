var arr=[1,3,5,7];
var n=arr.length;
var k=4;
flag=0;
for(i=0;i<n;i++)
{
    if(arr[i]==k)
    {
        console.log(i);
        flag=1;
    }
}

if(flag==0)
{
    for(i=0;i<n;i++)
    {
        if(arr[i]>k)
        {
            console.log(i);
            break;
        }
       
    }
    
}
if(k>arr[n-1])
{
    console.log(n);
}
   

