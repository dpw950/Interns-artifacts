function needle_haystack(haystack,needle){
    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
    }
    else{
        return -1;
    }
}

console.log(needle_haystack("sadbutsad","but"),needle_haystack("leetcode","leeto"));