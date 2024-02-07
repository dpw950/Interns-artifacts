function searchInsert(arr, n, k){
    for(let i=0; i<arr.length; i++){
        if (arr[i]===k){
            return i;
        }
        else if (arr[i]>k){
            return i;
        }
    }
    return n;
}
     
arr = [1, 3, 5, 6];
n = arr.length;
k=2;
console.log(searchInsert(arr,n,k))
k=-5;
console.log(searchInsert(arr,n,k))
k=8;
console.log(searchInsert(arr,n,k))