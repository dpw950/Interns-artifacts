function findPos(k,arr){
    found=false;
    for(var i=0;i<arr.length && found===false;i++){
        if(k <= arr[i]){
            console.log(i);
            found=true;
        }
    }
    if(k>arr[arr.length-1]){ // to check if insert should happen in last position
        console.log(arr.length);
    }
}
findPos(5,[1, 3, 5, 8]);
findPos(8,[1, 3, 5, 8])