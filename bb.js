// product1--------------------------------------------------------------------------------------




const product1 = [
  { name: "Jersey Stacked Logo T-Shirt", price: 22.99, image: "images/311.webp", gender: "Kid's" },
  { name: "Costal Fleece crew", price: 79.99, image: "images/315.webp", gender: "Womens's" },
  { name: "Atheletic French Terry Crew", price: 79.39, image: "images/313.webp", gender: "Mens's" },
  { name: "Hitch With Rope Grapic Hat", price: 37.99, image: "images/318.webp", gender: "Unisex" }
]
const pro1 = document.getElementById("pro1");
pro1.innerHTML = product1.map(e => `
 
    <div class="card p-2"  style="width: 22rem; border: none;cursor:pointer">
  
            <img src="${e.image}" class="card-img-top" alt="..." id="viewaddcart">
            <div class="card-body">
              <p class="card-text"><span class="sh" id="cartname">${e.name}</span> <span class="sc"><br>${e.gender} <br>
                  $${e.price}</span>
              
          
             
              <button class="addcart add-to-cart"
                  data-name="${e.name}"
                  data-price="${e.price}"
                  data-img="${e.image}">
           <i class="fa-solid fa-cart-shopping " ></i>
          </button>
          </p>
            </div>
          </div>
          
            `).join('')




// product2---------------------------------------------------------------------
const product2 = [
  { name: "Athletic Tank", price: 27.99, image: "images/312.webp", gender: "Kid's" },
  { name: "Coastal Flee Pant", price: 79, image: "images/316.webp", gender: "Womens's" },
  { name: "45' Canvas Hat", price: 47.39, image: "images/317.webp", gender: "Unisex" },
  { name: "Athletics French Terry Short", price: 64.99, image: "images/314.webp", gender: "mens's" }
]
const pro2 = document.getElementById("pro2");
pro2.innerHTML = product2.map(f => `
 
    <div class="card p-2 "id="view" style="width: 22rem; border: none;">
    
            <img src="${f.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text"><span class="sh">${f.name}</span> <span class="sc"><br>${f.gender} <br>
                  $${f.price}</span>
              
              
              <button class="addcart add-to-cart"
                  data-name="${f.name}"
                  data-price="${f.price}"
                  data-img="${f.image}">
           <i class="fa-solid fa-cart-shopping " ></i>
          </button></p>
              
            </div>
          </div>

          
            `).join('')


//combined product 1 and product 2---------------------------------------------
let mergproduct = [...product1, ...product2];
const pro11 = document.getElementById("pro11");
pro11.innerHTML = mergproduct.map(k => `
  <div class="card p-1 view" style="width: 40%; border: none;">
        <img src="${k.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text"><span class="sh">${k.name}</span> <span class="sc"><br>${k.gender} <br>
             ${k.price}</span>
        
           <button class="addcart add-to-cart"
                  data-name="${k.name}"
                  data-price="${k.price}"
                  data-img="${k.image}">
          <i class="fa-solid fa-cart-shopping " ></i>
          </button></p>
        </div>
      </div>
      
  `).join('')



//addto cart button--------------------------------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {

    let name = btn.getAttribute("data-name");
    let price = parseFloat(btn.getAttribute("data-price"));
    let img = btn.getAttribute("data-img");
    alert(name + " added to cart!");
    let item = cart.find(p => p.name === name);
    if (item) {
      item.qty++;
    } else {
      cart.push({ name, price, img, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();


  });
});

updateCartCount();









