function stringReturn(haystack,needle)
{
    index=haystack.search(needle);
    return index;
}
var strstr=stringReturn("sadbutsad","sad");
console.log(strstr);