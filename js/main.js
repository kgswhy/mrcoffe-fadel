// JS for MR.COFFEE interactive features will be added here

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  const body = document.body;

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      navOverlay.classList.toggle('active');
      body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking overlay
    navOverlay.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      navOverlay.classList.remove('active');
      body.style.overflow = '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        body.style.overflow = '';
      });
    });
  }

  // 1. Popup for Rewards Page
  const rewardBtns = document.querySelectorAll('.reward-popup');
  const modal = document.getElementById('reward-modal');
  const closeBtn = document.querySelector('.close-btn');
  if (rewardBtns && modal && closeBtn) {
    rewardBtns.forEach(btn => btn.addEventListener('click', () => {
      modal.style.display = 'block';
    }));
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  // 2. Menu Filter (menu.html)
  const menuData = [
    {
        name: 'Classic Espresso',
        price: 'Rp 25.000',
        img: '/assets/ClassicEspresso.jpg',
        description: 'Rich and bold espresso shot',
        type: 'espresso'
    },
    {
        name: 'Caramel Frappuccino',
        price: 'Rp 35.000',
        img: '/assets/CaramelFrappuccino.jpg',
        description: 'Blended coffee with caramel sauce',
        type: 'frappe'
    },
    {
        name: 'Cappuccino',
        price: 'Rp 30.000',
        img: '/assets/Cappuccino.jpg',
        description: 'Espresso with steamed milk and foam',
        type: 'espresso'
    },
    {
        name: 'Croissant',
        price: 'Rp 20.000',
        img: '/assets/Croissant.jpg',
        description: 'Buttery, flaky pastry',
        type: 'bread'
    },
    {
        name: 'Iced Latte',
        price: 'Rp 32.000',
        img: '/assets/IcedLatte.jpg',
        description: 'Espresso with cold milk',
        type: 'espresso'
    },
    {
        name: 'Mocha Frappuccino',
        price: 'Rp 38.000',
        img: '/assets/MochaFrappuccino.jpg',
        description: 'Blended coffee with chocolate sauce',
        type: 'frappe'
    },
    {
        name: 'Pour Over Coffee',
        price: 'Rp 28.000',
        img: '/assets/PourOverCoffee.jpg',
        description: 'Hand-brewed coffee with care',
        type: 'brewed'
    },
    {
        name: 'Chocolate Croissant',
        price: 'Rp 22.000',
        img: '/assets/ChocolateCroissant.jpg',
        description: 'Croissant filled with chocolate',
        type: 'bread'
    },
    {
        name: 'Vanilla Latte',
        price: 'Rp 33.000',
        img: '/assets/VanillaLatte.jpg',
        description: 'Espresso with vanilla syrup and steamed milk',
        type: 'espresso'
    },
    {
        name: 'Matcha Green Tea Latte',
        price: 'Rp 35.000',
        img: '/assets/MatchaGreenTeaLatte.jpg',
        description: 'Premium matcha with steamed milk',
        type: 'tea'
    },
    {
        name: 'Blueberry Muffin',
        price: 'Rp 25.000',
        img: '/assets/Blueberry-Muffin.jpg',
        description: 'Fresh baked muffin with blueberries',
        type: 'bread'
    },
   
  ];
  const menuList = document.querySelector('.menu-list');
  const menuFilters = document.querySelectorAll('.menu-filter');
  const menuLoading = document.getElementById('menuLoading');
  
  if (menuList && menuFilters.length) {
    function formatPrice(price) {
      // Remove 'Rp ' prefix and convert to number
      const numPrice = parseInt(price.replace('Rp ', '').replace('.', ''));
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(numPrice);
    }

    function showLoading() {
      menuLoading.style.display = 'block';
      menuList.style.opacity = '0.5';
    }

    function hideLoading() {
      menuLoading.style.display = 'none';
      menuList.style.opacity = '1';
    }

    function renderMenu(type) {
      showLoading();
      
      // Simulate loading delay for better UX
      setTimeout(() => {
        let filtered = type === 'all' ? menuData : menuData.filter(item => item.type === type);
        
        if (filtered.length === 0) {
          document.getElementById('noResults').style.display = 'block';
          menuList.innerHTML = '';
        } else {
          document.getElementById('noResults').style.display = 'none';
          menuList.innerHTML = filtered.map(item => `
            <div class="product-card" data-type="${item.type}">
              <img src="${item.img}" alt="${item.name}" loading="lazy">
              <h3>${item.name}</h3>
              <p class="price">${formatPrice(item.price)}</p>
              <div class="description">
                <p>${item.description}</p>
                <button class="btn" style="margin-top: 0.5rem; padding: 0.4rem 1rem; font-size: 0.9rem;">
                  <i class="fas fa-plus"></i> Add to Order
                </button>
              </div>
            </div>
          `).join('');
        }
        
        hideLoading();
      }, 300);
    }

    // Initial render
    renderMenu('all');

    // Filter click handlers
    menuFilters.forEach(btn => {
      btn.addEventListener('click', function() {
        menuFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderMenu(this.dataset.type);
      });
    });
  }

  // 3. Order Form Validation (order.html)
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const address = document.getElementById('address');
    const addressError = document.getElementById('addressError');
    const total = document.getElementById('total');
    const totalError = document.getElementById('totalError');

    // Real-time validation for Name
    name.addEventListener('input', function() {
      if (name.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
      } else if (hasNumber(name.value)) {
        nameError.textContent = 'Name cannot contain numbers.';
      } else {
        nameError.textContent = '';
      }
    });
    // Real-time validation for Email
    email.addEventListener('input', function() {
      if (email.value.trim().length < 5) {
        emailError.textContent = 'Email must be at least 5 characters.';
      } else if (!email.value.includes('@') || !email.value.includes('.')) {
        emailError.textContent = 'Please enter a valid email.';
      } else {
        emailError.textContent = '';
      }
    });
    // Real-time validation for Address
    address.addEventListener('input', function() {
      if (address.value.trim().length < 5) {
        addressError.textContent = 'Address must be at least 5 characters.';
      } else {
        addressError.textContent = '';
      }
    });
    // Real-time validation for Total
    total.addEventListener('input', function() {
      if (!total.value || Number(total.value) <= 0) {
        totalError.textContent = 'Total price must be greater than 0.';
      } else {
        totalError.textContent = '';
      }
    });
    // Helper function to check if string contains a number (no regex)
    function hasNumber(str) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') return true;
      }
      return false;
    }

    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      // Name: not empty, min 3 chars
      if (!name.value || name.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        valid = false;
      } else if (hasNumber(name.value)) {
        nameError.textContent = 'Name cannot contain numbers.';
        valid = false;
      } else {
        nameError.textContent = '';
      }
      // Email: not empty, must contain @ and .
      if (!email.value || email.value.trim().length < 5) {
        emailError.textContent = 'Email must be at least 5 characters.';
        valid = false;
      } else if (!email.value.includes('@') || !email.value.includes('.')) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
      } else {
        emailError.textContent = '';
      }
      // Address: not empty, min 5 chars
      if (!address.value || address.value.trim().length < 5) {
        addressError.textContent = 'Address must be at least 5 characters.';
        valid = false;
      } else {
        addressError.textContent = '';
      }
      // Total: must be > 0
      if (!total.value || Number(total.value) <= 0) {
        totalError.textContent = 'Total price must be greater than 0.';
        valid = false;
      } else {
        totalError.textContent = '';
      }
      if (valid) {
        document.getElementById('orderSuccess').style.display = 'block';
        orderForm.reset();
        setTimeout(() => {
          document.getElementById('orderSuccess').style.display = 'none';
        }, 2500);
      }
    });
  }
});
