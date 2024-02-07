function checkIndex(string,substring){
    var index=string.indexOf(substring);
    if(index != -1)
    {
        console.log(index);
    }
    else{
        console.log(-1);
    }
}

checkIndex('sadbutsad','sad');
checkIndex('leetcode','leeto');