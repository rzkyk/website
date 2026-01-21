/* --- 1. IMAGE DATABASE --- */
const imgIphone = [
    "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400", 
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400", 
    "https://images.unsplash.com/photo-1678685888221-cda773a3dcd9?auto=format&fit=crop&q=80&w=400", 
    "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400", 
    "https://images.unsplash.com/photo-1611791406157-1f18d9753994?auto=format&fit=crop&q=80&w=400"
];
/* --- 2. PRODUCT DATA (FULL 60 ITEMS) --- */
const products = [
    // --- IPHONE (ID 1-10) ---
    { id: 1, name: "iPhone 15 Pro Max", brand: "iphone", price: 24999000, img: "ip15promax.png" },
    { id: 2, name: "iPhone 15 Pro", brand: "iphone", price: 20999000, img: "15pro.png" },
    { id: 3, name: "iPhone 15 Plus", brand: "iphone", price: 18499000, img: "15plus.png" },
    { id: 4, name: "iPhone 15", brand: "iphone", price: 16499000, img: "15.png" },
    { id: 5, name: "iPhone 14 Pro Max", brand: "iphone", price: 19999000, img: "14promax.png" },
    { id: 6, name: "iPhone 14", brand: "iphone", price: 13999000, img: "14.png" },
    { id: 7, name: "iPhone 13", brand: "iphone", price: 10999000, img: "13.png" },
    { id: 8, name: "iPhone 12", brand: "iphone", price: 8999000, img: "12.png" },
    { id: 9, name: "iPhone SE Gen 3", brand: "iphone", price: 7999000, img: "se.png" },
    { id: 10, name: "iPhone 11", brand: "iphone", price: 6999000, img: "11.png" },

    // --- VIVO (ID 11-20) ---
    { id: 11, name: "Vivo X100 Pro", brand: "vivo", price: 16999000, img: "x100pro.png" }, /* Sesuai screenshot */
    { id: 12, name: "Vivo X100", brand: "vivo", price: 12999000, img: "x100.png" },         /* Sesuai screenshot */
    { id: 13, name: "Vivo V29 5G", brand: "vivo", price: 5999000, img: "v29.png" },           /* Sesuai screenshot */
    { id: 14, name: "Vivo V27 5G", brand: "vivo", price: 5499000, img: "v27.png" },           /* Sesuai screenshot */
    { id: 15, name: "Vivo Y100", brand: "vivo", price: 3899000, img: "y100.png" },           /* Sesuai screenshot */
    { id: 16, name: "Vivo Y36", brand: "vivo", price: 3399000, img: "y36.png" },             /* Sesuai screenshot */
    { id: 17, name: "Vivo T1 Pro", brand: "vivo", price: 4299000, img: "t1pro.png" },         /* Sesuai screenshot */
    { id: 18, name: "Vivo X90", brand: "vivo", price: 10999000, img: "x90.png" },             /* Sesuai screenshot */
    { id: 19, name: "Vivo iQOO 11", brand: "vivo", price: 10499000, img: "iqoo.png" },
    { id: 20, name: "Vivo Y02", brand: "vivo", price: 1299000, img: "yo2.png" },             /* Sesuai screenshot */

    // --- SAMSUNG (ID 21-30) ---
    { id: 21, name: "Samsung S24 Ultra", brand: "samsung", price: 21999000, img: "s24ultra.png" }, /* Sesuai screenshot */
    { id: 22, name: "Samsung S24 Plus", brand: "samsung", price: 16999000, img: "s24+.png" },   /* Sesuai screenshot */
    { id: 23, name: "Samsung S24", brand: "samsung", price: 13999000, img: "s24.png" },           /* Sesuai screenshot */
    { id: 24, name: "Samsung Z Fold 5", brand: "samsung", price: 24999000, img: "zfold5.png" },    /* Sesuai screenshot */
    { id: 25, name: "Samsung Z Flip 5", brand: "samsung", price: 15999000, img: "zflip5.png" },    /* Sesuai screenshot */
    { id: 26, name: "Samsung S23 FE", brand: "samsung", price: 8999000, img: "s23fe.png" },        /* Sesuai screenshot */
    { id: 27, name: "Samsung A54", brand: "samsung", price: 5999000, img: "a54.png" },             /* Sesuai screenshot */
    { id: 28, name: "Samsung A34", brand: "samsung", price: 4999000, img: "a34.png" },             /* Sesuai screenshot */
    { id: 29, name: "Samsung M54", brand: "samsung", price: 6299000, img: "m54.png" },             /* Sesuai screenshot */
    { id: 30, name: "Samsung A05s", brand: "samsung", price: 2299000, img: "a05s.png" },            /* Sesuai screenshot */

    // --- OPPO (ID 31-40) ---
    { id: 31, name: "Oppo Find N3", brand: "oppo", price: 29999000, img: "findn3.png" },         /* Sesuai screenshot */
    { id: 32, name: "Oppo Find N3 Flip", brand: "oppo", price: 15999000, img: "findn3flip.png" }, /* Sesuai screenshot */
    { id: 33, name: "Oppo Reno 10 Pro+", brand: "oppo", price: 10999000, img: "reno10pro.png" },  /* Sesuai screenshot */
    { id: 34, name: "Oppo Reno 10", brand: "oppo", price: 5999000, img: "reno10.png" },           /* Sesuai screenshot */
    { id: 35, name: "Oppo A98", brand: "oppo", price: 4499000, img: "a98.png" },                 /* Sesuai screenshot */
    { id: 36, name: "Oppo A78", brand: "oppo", price: 3599000, img: "a78.png" },                 /* Sesuai screenshot */
    { id: 37, name: "Oppo Find X5", brand: "oppo", price: 13999000, img: "findx5.png" },         /* Sesuai screenshot */
    { id: 38, name: "Oppo A58", brand: "oppo", price: 2399000, img: "a58.png" },                 /* Sesuai screenshot */
    { id: 39, name: "Oppo A18", brand: "oppo", price: 1499000, img: "a18.png" },                 /* Sesuai screenshot */
    { id: 40, name: "Oppo Reno 8T", brand: "oppo", price: 4899000, img: "reno8t.png" },           /* Sesuai screenshot */

    // --- XIAOMI (ID 41-50) ---
    { id: 41, name: "Xiaomi 14 Ultra", brand: "xiaomi", price: 19999000, img: "Xiaomi_14.png" },     /* Sesuaikan nama file */
    { id: 42, name: "Xiaomi 14", brand: "xiaomi", price: 12999000, img: "Xiaomi_14.png" },
    { id: 43, name: "Xiaomi 13T", brand: "xiaomi", price: 6499000, img: "Xiaomi_13T.png" },          /* Sesuai screenshot */
    { id: 44, name: "Redmi Note 13 Pro+", brand: "xiaomi", price: 5999000, img: "Redmi_Note_13_Pro+.png" }, /* Sesuai screenshot */
    { id: 45, name: "Redmi Note 13", brand: "xiaomi", price: 2999000, img: "Redmi_Note_13.png" },    /* Sesuai screenshot */
    { id: 46, name: "Poco F5", brand: "xiaomi", price: 4999000, img: "Poco_F5.png" },               /* Sesuai screenshot */
    { id: 47, name: "Poco X6 Pro", brand: "xiaomi", price: 4499000, img: "Poco_X6_Pro.png" },       /* Sesuai screenshot */
    { id: 48, name: "Redmi 13C", brand: "xiaomi", price: 1499000, img: "Redmi_13C.png" },           /* Sesuai screenshot */
    { id: 49, name: "Black Shark 5", brand: "xiaomi", price: 7999000, img: "Black_Shark_5.png" },
    { id: 50, name: "Mix Fold 3", brand: "xiaomi", price: 25999000, img: "Mix_Fold_3.png" },

    // --- ASUS (ID 51-60) ---
    { id: 51, name: "ROG Phone 8 Pro", brand: "asus", price: 19999000, img: "ROG_Phone_8_Pro.png" }, /* Sesuai screenshot */
    { id: 52, name: "ROG Phone 8", brand: "asus", price: 16999000, img: "ROG_Phone_8.png" },         /* Sesuai screenshot */
    { id: 53, name: "Zenfone 10", brand: "asus", price: 11999000, img: "Zenfone_10.png" },           /* Sesuai screenshot */
    { id: 54, name: "ROG 7 Ultimate", brand: "asus", price: 23999000, img: "ROG_7_Ultimate.png" },   /* Sesuai screenshot */
    { id: 55, name: "ROG Phone 7", brand: "asus", price: 13999000, img: "ROG_Phone_7.png" },         /* Sesuai screenshot */
    { id: 56, name: "Zenfone 9", brand: "asus", price: 7999000, img: "Zenfone_9.png" },             /* Sesuai screenshot */
    { id: 57, name: "ROG Phone 6D", brand: "asus", price: 10999000, img: "ROG_Phone_6D.png" },       /* Sesuai screenshot */
    { id: 58, name: "ROG Phone 6", brand: "asus", price: 8999000, img: "ROG_Phone_6.png" },           /* Sesuai screenshot */
    { id: 59, name: "Zenfone 8 Flip", brand: "asus", price: 6999000, img: "Zenfone_8_Flip.png" },     /* Sesuai screenshot */
    { id: 60, name: "Zenfone 8", brand: "asus", price: 5500000, img: "Zenfone_8.png" }               /* Sesuai screenshot */
];

/* --- 3. TOAST NOTIFICATION --- */
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-bell"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3500);
}

/* --- 4. RENDER PRODUCTS --- */
function renderProducts(data) {
    const container = document.getElementById('product-list');
    if (!container) return; 
    container.innerHTML = ""; 
    data.forEach(p => {
        const price = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(p.price);
        container.innerHTML += `
            <div class="product-card">
                <span class="badge">Ready Stock</span>
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${price}</p>
                <button class="btn-detail" onclick="goToDetail(${p.id})">
                    <i class="fa-regular fa-eye"></i> VIEW DETAIL
                </button>
            </div>
        `;
    });
}

function goToDetail(id) {
    localStorage.setItem('selectedProductId', id);
    window.location.href = 'detail.html';
}

function searchProduct() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    renderProducts(products.filter(p => p.name.toLowerCase().includes(val)));
}

function filterProduct(brand) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts(brand === 'all' ? products : products.filter(p => p.brand === brand));
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        const keyword = document.getElementById('searchInput').value;
        if(keyword) window.location.href = 'shop.html';
    }
}

/* --- 5. AUTH SYSTEM --- */
let isLoginMode = true; 
function switchAuthMode() {
    isLoginMode = !isLoginMode;
    const title = document.getElementById('authTitle');
    const btn = document.getElementById('authBtn');
    const toggleText = document.getElementById('authToggleText');
    const form = document.getElementById('authForm');
    form.reset();
    if (isLoginMode) {
        title.innerText = "Member Login"; btn.innerText = "LOGIN";
        toggleText.innerHTML = `Don't have an account? <span onclick="switchAuthMode()">Register here</span>`;
    } else {
        title.innerText = "Create Account"; btn.innerText = "REGISTER";
        toggleText.innerHTML = `Already have an account? <span onclick="switchAuthMode()">Login here</span>`;
    }
}

function handleAuth(event) {
    event.preventDefault(); 
    const userIn = document.getElementById('usernameInput').value.trim();
    const passIn = document.getElementById('passwordInput').value.trim();
    if(!userIn || !passIn) { showToast("Please fill in username and password!"); return; }
    let users = JSON.parse(localStorage.getItem('usersDB')) || [];
    if (isLoginMode) {
        const foundUser = users.find(u => u.username === userIn && u.password === passIn);
        if (foundUser) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', foundUser.username);
            showToast(`Welcome back, ${foundUser.username}!`);
            toggleLoginModal(); checkLoginStatus();
        } else { showToast("Invalid username or password!"); }
    } else {
        const exists = users.find(u => u.username === userIn);
        if (exists) { showToast("Username already taken!"); }
        else {
            users.push({ username: userIn, password: passIn });
            localStorage.setItem('usersDB', JSON.stringify(users));
            showToast("Registration Successful! Please Login.");
            switchAuthMode();
        }
    }
}

function performLogout() { document.getElementById('confirmModal').style.display = 'flex'; }
function confirmLogout(choice) {
    document.getElementById('confirmModal').style.display = 'none';
    if (choice) {
        localStorage.removeItem('isLoggedIn'); localStorage.removeItem('currentUser');
        showToast("Logged out successfully."); checkLoginStatus();
        setTimeout(() => window.location.reload(), 1000);
    }
}
function checkLoginStatus() {
    const navArea = document.getElementById('nav-user-area');
    const isLogged = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('currentUser');
    if(navArea && isLogged) {
        navArea.innerHTML = `<span style="color:white; margin-right:15px; font-size:13px;">Hi, ${user}</span><button class="btn-login" onclick="performLogout()">LOGOUT</button>`;
    } else if (navArea) {
        navArea.innerHTML = `<button class="btn-login" onclick="toggleLoginModal()">Login</button>`;
    }
}
function toggleLoginModal() {
    const m = document.getElementById('loginModal');
    if(m.style.display !== 'flex') {
        isLoginMode = true;
        document.getElementById('authTitle').innerText = "Member Login";
        document.getElementById('authBtn').innerText = "LOGIN";
        document.getElementById('authToggleText').innerHTML = `Don't have an account? <span onclick="switchAuthMode()">Register here</span>`;
        document.getElementById('authForm').reset();
    }
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

/* --- 6. PAGE LOGIC --- */
function loadDetail() {
    if(!document.getElementById('detailName')) return;
    const p = products.find(i => i.id == localStorage.getItem('selectedProductId'));
    if(p) {
        document.getElementById('detailName').innerText = p.name;
        document.getElementById('detailPrice').innerText = new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'}).format(p.price);
        document.getElementById('detailImg').src = p.img;
        document.getElementById('breadcrumbName').innerText = p.name;
    }
}

function buyNow() {
    if(localStorage.getItem('isLoggedIn') !== 'true') {
        showToast("Please Login first to place an order!"); setTimeout(() => toggleLoginModal(), 1000);
    } else {
        localStorage.setItem('checkoutProductId', localStorage.getItem('selectedProductId'));
        window.location.href = 'checkout.html';
    }
}

function checkLoginForShop() {
    if(localStorage.getItem('isLoggedIn') !== 'true') {
        showToast("Please Login to access the Shop."); setTimeout(() => toggleLoginModal(), 1000);
    } else { window.location.href = 'shop.html'; }
}

function loadCheckout() {
    if(!document.getElementById('checkoutName')) return;
    const p = products.find(i => i.id == localStorage.getItem('checkoutProductId'));
    if(p) {
        const price = new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'}).format(p.price);
        document.getElementById('checkoutName').innerText = p.name;
        document.getElementById('checkoutImg').src = p.img;
        document.getElementById('checkoutPrice').innerText = price;
        document.getElementById('checkoutTotal').innerText = price;
        if(localStorage.getItem('currentUser')) document.getElementById('buyerName').value = localStorage.getItem('currentUser');
    }
}

function updatePaymentInfo() {
    const method = document.getElementById('paymentSelect').value;
    const box = document.getElementById('paymentInfo'); box.style.display = 'block';
    let content = '';
    if(method === 'bca') content = `<h4 style="color:#c9a55c; text-align:center;">BCA: 8830-1234-5678</h4><p style="text-align:center; color:#ccc">Name: PhoneStore</p>`;
    else if(method === 'mandiri') content = `<h4 style="color:#c9a55c; text-align:center;">Mandiri: 123-00-456-789</h4><p style="text-align:center; color:#ccc">Name: PhoneStore</p>`;
    else if(method === 'cod') content = `<div style="text-align:center"><p>Pay cash upon delivery.</p></div>`;
    box.innerHTML = content;
}

function processPayment() {
    document.getElementById('successModal').style.display = 'flex';
    document.getElementById('succName').innerText = document.getElementById('buyerName').value;
    document.getElementById('orderId').innerText = 'ORD-' + Math.floor(Math.random()*100000);
}

/* ========================================= */
/* --- 7. AUTOMATED LIVE CHAT SYSTEM (NEW) --- */
/* ========================================= */

// 1. Inject Chat HTML to Body
function initChatWidget() {
    const chatHTML = `
        <div class="chat-toggle-btn" onclick="toggleChat()">
            <i class="fa-solid fa-comments"></i>
        </div>
        <div class="chat-window" id="chatWindow">
            <div class="chat-header">
                <h4><i class="fa-solid fa-robot"></i> Assistant</h4>
                <span class="close-chat" onclick="toggleChat()">&times;</span>
            </div>
            <div class="chat-body" id="chatBody">
                <div class="chat-bubble bot">Hello! Welcome to PhoneStore. How can I help you today?</div>
            </div>
            <div class="chat-footer">
                <input type="text" id="chatInput" placeholder="Type here..." onkeypress="handleChatEnter(event)">
                <button onclick="sendUserMessage()"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHTML);
}

// 2. Open/Close Chat
function toggleChat() {
    const w = document.getElementById('chatWindow');
    w.classList.toggle('active');
}

// 3. Handle Sending Message
function handleChatEnter(e) {
    if(e.key === 'Enter') sendUserMessage();
}

function sendUserMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if(!text) return;

    // Add User Message
    addChatBubble(text, 'user');
    input.value = '';

    // Simulate Bot Thinking
    setTimeout(() => {
        const reply = getBotResponse(text);
        addChatBubble(reply, 'bot');
    }, 800);
}

// 4. Add Bubble to UI
function addChatBubble(text, sender) {
    const body = document.getElementById('chatBody');
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerText = text;
    body.appendChild(bubble);
    body.scrollTop = body.scrollHeight; // Auto scroll down
}

// 5. SIMPLE AI LOGIC (LOGIKA BOT)
function getBotResponse(input) {
    const lower = input.toLowerCase();

    if(lower.includes('hello') || lower.includes('hi') || lower.includes('halo')) {
        return "Hi there! I can help you with Stock, Shipping, or Payment methods.";
    }
    else if(lower.includes('price') || lower.includes('harga') || lower.includes('cost')) {
        return "Our prices are listed in the Catalog. We offer the best deals for premium gadgets.";
    }
    else if(lower.includes('stock') || lower.includes('stok') || lower.includes('available')) {
        return "Most of our items are Ready Stock! Please check the Shop page for details.";
    }
    else if(lower.includes('ship') || lower.includes('kirim') || lower.includes('delivery')) {
        return "We use secure wooden packing for all shipments. Shipping is free for Java & Bali areas.";
    }
    else if(lower.includes('pay') || lower.includes('bayar') || lower.includes('bank')) {
        return "We accept BCA, Mandiri transfer, and COD (Cash on Delivery).";
    }
    else if(lower.includes('shop') || lower.includes('buy')) {
        return "You can start shopping by clicking the 'Shop' menu above. Don't forget to Login!";
    }
    else {
        return "I'm sorry, I didn't understand that. You can ask about 'Stock', 'Shipping', or 'Payment'.";
    }
}

/* --- INITIALIZE ALL --- */
window.onload = function() {
    checkLoginStatus();
    renderProducts(products);
    loadDetail();
    loadCheckout();
    
    // START CHAT WIDGET
    initChatWidget();
}