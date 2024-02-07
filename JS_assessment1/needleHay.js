function needleHay(haystack, needle){
    if(haystack.includes(needle)){

        let i=0;
        let j=0;
        let k=[];
        while(j<needle.length){
            index=i;
            if(haystack[i]===needle[j]){
                k.push(i);
                i++;
                j++;
            }
            else{
                i++;
                j=0;
            }
        }
        if (j===needle.length){
            return k[0];
        }   
    }
    else{
        return -1;
    }
}

function needleHay2(haystack, needle){
    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
    }
    else{
        return -1;
    }
}
console.log(needleHay2('sadbutsad','sad'));
console.log(needleHay2('leetcode','leeto'));
console.log(needleHay2('butsad','sad'));

console.log(needleHay('sadbutsad','sad'));
console.log(needleHay('leetcode','leeto'));
console.log(needleHay('butsad','sad'));