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