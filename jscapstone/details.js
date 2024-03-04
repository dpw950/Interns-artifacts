const products = [
  { name: "Amoxicillin",
    image: {
      src: "pill1.jpg",      
    },
    productId: 1,
    price: '100 Rupees',
    description: "Amoxicillin is pencillin antibiotic.It is used to treat bacterial infections such as pneumonia etc.." ,
    sideEffect: "Vomiting,Diarrhea"
  },
  { name: "Citirizine",
    image: {
      src: "pill1.jpg",
     
    },
    productId: 2,
    price: '50 Rupees',
    description: "Citrizine is a relatively safe and effective medication for treating allergic rhinitisand sinusities",
    sideEffect: "Headache, Dizziness"
  },
  { name: "Paracetamol",
    image: {
      src:"pill1.jpg",     
    },
    productId: 3,
    price: '20 Rupees',
    description: "Paracetamol is an analgesic and antipyretic drug that is used to temporarily relieve pain and fever." ,
    sideEffect: "tiredness, breathlessness."
  }
];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
const productDetails = document.getElementById("product-details");

function renderProductDetails(productId) {
  const selectedProduct = products.find((product) => product.productId == productId);
  if (selectedProduct)
  {
      productDetails.innerHTML = `
          <div class="heading">
          <h2>${selectedProduct.name}</h2>
          </div>
          <div class="details">
          <img src="${selectedProduct.image.src}" alt="${selectedProduct.name}">
          <h4>About:</h4>
          <p class="description">${selectedProduct.description}</p>
          <h4>Price:</h4>
          <p class="price">${selectedProduct.price}</p>
          <h4>Side Effects:</h4>
          <p class="sideEffect">${selectedProduct.sideEffect}</p>
          </div>
          <div class="note">
          <p><b>Note:</b> Consume as per prescribed by physician</p>
          </div>
      `;
      productDetails.style.display = "block";
  }
  else
  {
      console.error("Product not found:", productId);
  }
}
renderProductDetails(productId)

console.log("Product ID:", productId);