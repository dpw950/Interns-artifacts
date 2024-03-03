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

const notAvailableDiv = document.getElementById("notAvailable");
notAvailableDiv.style.display = "none";
function search() {
  const searchText = document.getElementById("search-input").value;
   const searchedProducts = products.filter((product) =>
     product.name.toLowerCase().includes(searchText)
 );
 var divs = document.querySelectorAll('#products-container div');
   divs.forEach(function(div) {
        div.style.display = "none";        
        if(searchedProducts.length > 0) {
          for (let product in searchedProducts) {
            const productDivId = searchedProducts[product].productId;;
            if(div.id == productDivId){
              div.style.display = "block";
            }         
          }
        } else {
          const notAvailableDiv = document.getElementById("notAvailable");
          notAvailableDiv.style.display = "block";
        }
      });
}

function goTo(id) {
  window.location.href = `productDescription.html?productId=${id}`;
}
