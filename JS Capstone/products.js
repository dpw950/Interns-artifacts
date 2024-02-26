const products = [
    { name: "Azithromycin 500mg",
      image: {
        src: "images/azithromycin.png",
        alt: "Azithromycin 500mg",
      },
      productId: 1,
      price: '150 Rupees',
      description: "Azithromycin is used to treat certain bacterial infections, such as bronchitis; pneumonia; sexually transmitted diseases (STD); and infections of the ears, lungs, sinuses, skin, throat, and reproductive organs." ,
      sideEffect: "Nausea, Headache"
    },
    { name: "Brufen 400mg",
      image: {
        src: "images/brufen.jpg",
        alt: "Brufen 400mg",
      },
      productId: 2,
      price: '300 Rupees',
      description: "Brufen 400 tablet is used to provide relief from pain and inflammation in rheumatoid arthritis, joints, reduced movements of joints (ankylosing spondylitis), back pain, sprains, muscles, dental, period pain, headache and pain after surgical procedure.",
      sideEffect: "Indigestion, Dizziness"
    },
    { name: "Combiflam", 
      image: {
        src: "images/combiflam.webp",
        alt: "Combiflam",
      },
      productId: 3,
      price: '240 Rupees',
      description: "Combiflam is a widely used drug prescribed to reduce pain and inflammation. Doctors recommend the medicine for fever, headache, toothache, muscle, and joint pain. The drug is used as a cure to a symptom and not to cure the underlying condition." ,
      sideEffect: "Constipation, Nausea"
    }
];

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const productsContainer = document.getElementById("products-container");

function renderProducts(filteredProducts) {
  productsContainer.innerHTML = "";

  if (filteredProducts.length === 0) 
  {
    productsContainer.innerHTML = "Sorry, medicine not available.";
  } 
  else 
  {
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.dataset.productId = product.productId;
      productCard.innerHTML = `
          <img src="${product.image.src}" alt="${product.name}" class="prodImage">
          <h4 class="prod-h4">${product.name}</h4>
      `;
      productsContainer.appendChild(productCard);
      
      productCard.addEventListener("click", () => {
        const productId = productCard.dataset.productId; 
        window.location.href = `productDetails.html?productId=${productId}`;
      });
    });
  } 
}
    
renderProducts(products);

searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

  
  
