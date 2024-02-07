function validTriangle(a,b,c){
    console.log(a,b,c);
    if (a+b<=c){
        console.log('Invalid');
    }
    else if(a+c<=b){
        console.log('Invalid');
    }
    else if(b+c<=a){
        console.log('Invalid');
    }
    else{
        console.log('Valid');
    }
}

validTriangle(3,8,10);
validTriangle(3,4,1);