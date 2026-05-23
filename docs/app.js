const vmConfig = {
  brand: "VM Prime Distribution",
  currency: "USD",
  phone: "13213181726"
};

const vmFeaturedProducts = [
  { id: 101, name: "Dr. Marty Nature's Blend Essential Wellness", description: "Premium Food", price: 44.99, image: "./assets/products/dr_marty_essential.jpg" },
  { id: 102, name: "Dr. Marty Nature's Blend Small Breed", description: "Premium Food", price: 47.99, image: "./assets/products/dr_marty_small_breed.jpg" },
  { id: 103, name: "Dr. Marty Radiant Select Freeze-Dried", description: "Premium Food", price: 49.99, image: "./assets/products/dr_marty_radiant.jpg" },
  { id: 104, name: "Ziwi Peak Air-Dried Beef Recipe", description: "Premium Food", price: 39.99, image: "./assets/products/ziwi_beef.jpg" },
  { id: 105, name: "Stella & Chewy's Dinner Patties Beef", description: "Premium Food", price: 28.99, image: "./assets/products/stella_beef_patties.jpg" }
];

const vmPopularProducts = [
  { id: 106, name: "Full Moon Chicken Jerky Tenders", description: "Treats", price: 18.99, image: "./assets/products/full_moon_jerky.jpg" },
  { id: 107, name: "PureBites Freeze-Dried Beef Liver Treats", description: "Treats", price: 16.99, image: "./assets/products/purebites_liver.jpg" },
  { id: 108, name: "Vital Essentials Duck Treats", description: "Treats", price: 21.99, image: "./assets/products/vital_essentials_duck.jpg" },
  { id: 201, name: "Greenies Dental Treats", description: "Treats", price: 19.99, image: "./assets/products/greenies_dental.jpg" },
  { id: 202, name: "Milk-Bone Soft Chews", description: "Treats", price: 14.99, image: "./assets/products/milkbone_soft_chews.jpg" },
  { id: 203, name: "Platinum Performance Canine Wellness Formula", description: "Supplements", price: 39.99, image: "./assets/products/platinum_performance.jpg" },
  { id: 204, name: "VetIQ Calming Support Chews", description: "Supplements", price: 17.99, image: "./assets/products/vetiq_calming.jpg" },
  { id: 205, name: "Zesty Paws Hip & Joint Chews", description: "Supplements", price: 29.99, image: "./assets/products/zesty_paws_hip_joint.jpg" },
  { id: 206, name: "Nutramax Cosequin Joint Support", description: "Supplements", price: 34.99, image: "./assets/products/nutramax_cosequin.jpg" },
  { id: 207, name: "Native Pet Probiotic Powder", description: "Supplements", price: 27.99, image: "./assets/products/native_pet_probiotic.jpg" },
  { id: 208, name: "Petlibro Automatic Smart Feeder", description: "Technology", price: 109.99, image: "./assets/products/petlibro_feeder.jpg" },
  { id: 209, name: "Wahl Pet-Pro Clipper Kit", description: "Grooming", price: 49.99, image: "./assets/products/wahl_clipper.jpg" },
  { id: 210, name: "Premier Pet GPS Fence Collar", description: "Technology", price: 69.99, image: "./assets/products/premier_pet_gps.jpg" },
  { id: 211, name: "Furbo Dog Camera Treat Dispenser", description: "Technology", price: 119.99, image: "./assets/products/furbo_dispenser.jpg" },
  { id: 212, name: "KONG Extreme Chew Toy", description: "Toys", price: 18.99, image: "./assets/products/kong_extreme.jpg" },
  { id: 213, name: "Serta Orthopedic Dog Bed", description: "Beds", price: 44.99, image: "./assets/products/serta_bed.jpg" },
  { id: 214, name: "Furhaven Memory Foam Bed", description: "Beds", price: 54.99, image: "./assets/products/furhaven_bed.jpg" },
  { id: 215, name: "Best Friends by Sheri Calming Donut Bed", description: "Beds", price: 42.99, image: "./assets/products/best_friends_donut_bed.jpg" },
  { id: 216, name: "PetFusion Ultimate Lounge Bed", description: "Beds", price: 79.99, image: "./assets/products/petfusion_lounge_bed.jpg" },
  { id: 217, name: "Bedsure Washable Pet Bed", description: "Beds", price: 34.99, image: "./assets/products/bedsure_washable_bed.jpg" }
];

const vmProducts = [...vmFeaturedProducts, ...vmPopularProducts];

const vmProductModalDescriptions = {
  101: "Freeze-dried raw formula with premium proteins and nutrient-rich fruits and vegetables for daily complete nutrition.",
  102: "Small-breed recipe crafted in bite-size pieces to support healthy digestion, energy, and coat quality.",
  103: "Premium freeze-dried blend designed to support skin glow, immune resilience, and overall vitality.",
  104: "Air-dried beef recipe with high meat content and minimal processing for a nutrient-dense meal.",
  105: "Raw-coated dinner patties with responsibly sourced beef, ideal as a complete meal or food topper.",
  106: "Slow-cooked chicken jerky tenders made with simple ingredients and no artificial preservatives.",
  107: "Single-ingredient freeze-dried beef liver treats, perfect for training and sensitive stomachs.",
  108: "Protein-packed duck treats with limited ingredients for clean snacking and reward moments.",
  201: "Dental chews that help reduce plaque and tartar while keeping breath fresh between brushings.",
  202: "Soft and chewy mini treats made with real chicken, easy to break for everyday training sessions.",
  203: "Advanced wellness blend that supports joints, digestion, skin, and long-term canine performance.",
  204: "Calming support chews to help manage stress during storms, travel, grooming, and separation moments.",
  205: "Hip and joint soft chews with glucosamine and chondroitin for mobility and cartilage support.",
  206: "Veterinarian-trusted joint supplement for dogs needing extra cartilage and connective tissue support.",
  207: "Daily probiotic powder to promote healthy digestion, gut balance, and firmer stool quality.",
  208: "Smart automatic feeder with scheduled meals and app-friendly controls for reliable daily feeding.",
  209: "Professional-grade clipper kit with precision blades for full-body trims and maintenance grooming.",
  210: "Wireless GPS fence collar with customizable boundaries for safer off-leash outdoor freedom.",
  211: "Interactive pet camera with treat tossing, two-way audio, and alerts for remote check-ins.",
  212: "Ultra-durable natural rubber toy designed for power chewers and long-lasting enrichment.",
  213: "Orthopedic bed with pressure-relief support to help improve rest quality for adult and senior dogs.",
  214: "Memory foam bed with supportive base and plush sleep surface for daily comfort and recovery.",
  215: "Calming donut-style bed with soft shag texture that encourages nesting and reduces anxiety.",
  216: "Lounge-style memory foam bed with bolsters and removable cover for premium comfort and easy care.",
  217: "Durable washable pet bed with cozy cushioning, designed for everyday use and quick cleaning."
};

const vmCartStorageKey = "vmprime.cart";
const vmCart = [];

function vmMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: vmConfig.currency
  }).format(value);
}

function vmProductCard(product) {
  return `
    <article class="vm-card">
      <button class="vm-card-open" type="button" data-product-id="${product.id}" aria-label="View details for ${product.name}">
        <img class="vm-product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="vm-price">${vmMoney(product.price)}</span>
      </button>
      <button class="vm-btn" type="button" onclick="vmAddToCart(${product.id})">Add to cart</button>
    </article>
  `;
}

function vmSaveCart() {
  window.sessionStorage.setItem(vmCartStorageKey, JSON.stringify(vmCart));
}

function vmLoadCart() {
  const raw = window.sessionStorage.getItem(vmCartStorageKey);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;

    const validItems = parsed
      .map((item) => {
        const product = vmProducts.find((p) => p.id === item.id);
        if (!product) return null;

        const qty = Number(item.qty);
        if (!Number.isInteger(qty) || qty < 1) return null;

        return { ...product, qty };
      })
      .filter(Boolean);

    vmCart.push(...validItems);
  } catch {
    window.sessionStorage.removeItem(vmCartStorageKey);
  }
}

function vmRenderProducts() {
  const featuredRoot = document.getElementById("vmFeaturedProducts");
  featuredRoot.innerHTML = vmFeaturedProducts.map((p) => vmProductCard(p)).join("");

  const categories = {
    vmSnacksGrid: ["Treats"],
    vmSupplementsGrid: ["Supplements"],
    vmAccessoriesGrid: ["Technology", "Grooming", "Toys"],
    vmBedsGrid: ["Beds"]
  };

  for (const [gridId, descriptions] of Object.entries(categories)) {
    const root = document.getElementById(gridId);
    if (!root) continue;
    root.innerHTML = vmPopularProducts
      .filter((p) => descriptions.includes(p.description))
      .map((p) => vmProductCard(p))
      .join("");
  }
}

function vmAddToCart(productId) {
  const product = vmProducts.find((p) => p.id === productId);
  if (!product) return;

  const existing = vmCart.find((item) => item.id === productId);
  if (existing) existing.qty += 1;
  else vmCart.push({ ...product, qty: 1 });

  vmSaveCart();
  vmRenderCart();
}

function vmChangeQty(productId, delta) {
  const item = vmCart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    const index = vmCart.findIndex((cartItem) => cartItem.id === productId);
    if (index >= 0) vmCart.splice(index, 1);
  }

  vmSaveCart();
  vmRenderCart();
}

function vmRemoveFromCart(productId) {
  const index = vmCart.findIndex((item) => item.id === productId);
  if (index < 0) return;

  const item = vmCart[index];
  const confirmed = window.confirm(`Remove ${item.name} from cart?`);
  if (!confirmed) return;

  vmCart.splice(index, 1);
  vmSaveCart();
  vmRenderCart();
}

function vmRenderCart() {
  const cartNode = document.getElementById("vmCartItems");
  const totalNode = document.getElementById("vmTotal");

  if (!vmCart.length) {
    cartNode.textContent = "Your cart is empty.";
    totalNode.textContent = vmMoney(0);
    return;
  }

  let total = 0;
  cartNode.innerHTML = vmCart
    .map((item) => {
      const lineTotal = item.qty * item.price;
      total += lineTotal;
      return `
        <div class="vm-line">
          <div>
            <strong>${item.name}</strong>
            <div class="vm-line-controls">
              <button class="vm-qty-btn" type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">-</button>
              <span>${item.qty}</span>
              <button class="vm-qty-btn" type="button" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
              <button class="vm-remove-btn" type="button" data-action="remove" data-id="${item.id}" aria-label="Remove product">Remove</button>
            </div>
          </div>
          <strong>${vmMoney(lineTotal)}</strong>
        </div>
      `;
    })
    .join("");

  totalNode.textContent = vmMoney(total);
}

function vmClearCart() {
  vmCart.length = 0;
  vmSaveCart();
  vmRenderCart();
}

function vmSendWhatsApp() {
  if (!vmCart.length) {
    window.alert("Your cart is empty.");
    return;
  }

  let total = 0;
  const lines = vmCart.map((item) => {
    const lineTotal = item.qty * item.price;
    total += lineTotal;
    return `- ${item.qty} x ${item.name}: ${vmMoney(lineTotal)}`;
  });

  const text =
    `Hi, I would like to place this order at ${vmConfig.brand}:\n` +
    lines.join("\n") +
    `\n\nTotal: ${vmMoney(total)}`;

  const url = `https://wa.me/${vmConfig.phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function vmSyncStickyOffset() {
  const stickyHeader = document.getElementById("vmStickyHeader");
  if (!stickyHeader) return;

  const offset = Math.ceil(stickyHeader.getBoundingClientRect().height + 12);
  document.documentElement.style.setProperty("--vm-sticky-offset", `${offset}px`);
}

document.getElementById("vmClearBtn").addEventListener("click", vmClearCart);
document.getElementById("vmWhatsBtn").addEventListener("click", vmSendWhatsApp);
document.getElementById("vmCartItems").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  if (!Number.isInteger(id)) return;

  if (action === "increase") vmChangeQty(id, 1);
  if (action === "decrease") vmChangeQty(id, -1);
  if (action === "remove") vmRemoveFromCart(id);
});

vmRenderProducts();
vmLoadCart();
vmRenderCart();
vmSyncStickyOffset();

window.addEventListener("resize", vmSyncStickyOffset);
window.addEventListener("load", vmSyncStickyOffset);

// Modal drawers
function vmOpenModal(id) {
  document.querySelectorAll(".vm-modal:not([hidden])").forEach((m) => vmCloseModal(m));
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".vm-modal-close");
  if (closeBtn) closeBtn.focus();
}

function vmCloseModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function vmOpenProductModal(productId) {
  const id = Number(productId);
  if (!Number.isInteger(id)) return;

  const product = vmProducts.find((p) => p.id === id);
  if (!product) return;

  const modal = document.getElementById("vmModalProduct");
  if (!modal) return;

  const image = document.getElementById("vmModalProductImage");
  const name = document.getElementById("vmModalProductName");
  const category = document.getElementById("vmModalProductCategory");
  const price = document.getElementById("vmModalProductPrice");
  const description = document.getElementById("vmModalProductDescription");
  const addBtn = document.getElementById("vmModalAddBtn");
  if (!image || !name || !category || !price || !description || !addBtn) return;

  image.src = product.image;
  image.alt = product.name;
  name.textContent = product.name;
  category.textContent = product.description;
  price.textContent = vmMoney(product.price);
  description.textContent =
    vmProductModalDescriptions[product.id] ||
    `${product.name} is one of our most popular ${product.description.toLowerCase()} products.`;
  addBtn.dataset.productId = String(product.id);

  vmOpenModal("vmModalProduct");
}

document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => vmOpenModal(btn.dataset.modal));
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".vm-card-open[data-product-id]");
  if (!trigger) return;
  vmOpenProductModal(trigger.dataset.productId);
});

const vmModalAddBtn = document.getElementById("vmModalAddBtn");
if (vmModalAddBtn) {
  vmModalAddBtn.addEventListener("click", () => {
    const id = Number(vmModalAddBtn.dataset.productId);
    if (!Number.isInteger(id)) return;

    vmAddToCart(id);
    const modal = document.getElementById("vmModalProduct");
    if (modal) vmCloseModal(modal);
  });
}

document.querySelectorAll(".vm-modal").forEach((modal) => {
  modal.querySelector(".vm-modal-backdrop").addEventListener("click", () => vmCloseModal(modal));
  modal.querySelector(".vm-modal-close").addEventListener("click", () => vmCloseModal(modal));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".vm-modal:not([hidden])").forEach((m) => vmCloseModal(m));
  }
});
