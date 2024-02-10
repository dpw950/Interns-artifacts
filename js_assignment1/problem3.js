var k=6;
list=[0,1,3,4];
var flag=0;

for(i=0;i<list.length;i++){
  if(k==list[i]){
    console.log(i);  
    flag=1; 
    break;       
  }
}
if(flag!=1){
  for(var j=0;j<list.length;j++){
    if(list[j]>k){
      console.log(j); 
      flag=2;     
      break;
    }
  }
}
if(flag==0){
    console.log(list.length);
    }      
  
    
   
  
  
      

