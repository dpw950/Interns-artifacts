function search(k){
    const arr=[1,3,5,6];
    c=0
    for(i=0;i<4;i++)
    {
        if(arr[i]==k)
        {
            console.log(i);
            c=1;
        }
    }
    if(c==0)
    {
        if(k<arr[0])
        {
            console.log('0');
        }
        if(k>arr[4-1])
        {
            console.log('4');
        }
        for(i=1;i<4-1;i++)
        {
            if(arr[i-1]<k && k<arr[i])
            {
                console.log(i)
            }
        }
    }
}

search(5);
search(2);
search(-7);