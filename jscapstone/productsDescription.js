const products = [
  { name: "Amoxicillin",    
    productId: 1   
  },
  { name: "Citirizine",   
    productId: 2    
  },
  { name: "Paracetamol",    
    productId: 3    
  }
];

const allDivs=document.querySelectorAll('#products-container1 div');
allDivs.forEach(function(div) {
  div.style.display = "none";
});

const notAvailableDiv = document.getElementById("notAvailable");
notAvailableDiv.style.display = "none";

const idInfo = new URLSearchParams(window.location.search);
const Id = idInfo.get('productId');

if(Id == '') {
  notAvailableDiv.style.display = "block";
}
products.forEach(function(product) {
  if (Id == product.productId) {    
    // alert(Id == product.productId);
    document.getElementById(Id).style.display="block";
  } 
});



