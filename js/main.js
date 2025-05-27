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
        img: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
        description: 'Rich and bold espresso shot',
        type: 'espresso'
    },
    {
        name: 'Caramel Frappuccino',
        price: 'Rp 35.000',
        img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
        description: 'Blended coffee with caramel sauce',
        type: 'frappe'
    },
    {
        name: 'Cappuccino',
        price: 'Rp 30.000',
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
        description: 'Espresso with steamed milk and foam',
        type: 'espresso'
    },
    {
        name: 'Croissant',
        price: 'Rp 20.000',
        img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
        description: 'Buttery, flaky pastry',
        type: 'bread'
    },
    {
        name: 'Iced Latte',
        price: 'Rp 32.000',
        img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500',
        description: 'Espresso with cold milk',
        type: 'espresso'
    },
    {
        name: 'Mocha Frappuccino',
        price: 'Rp 38.000',
        img: 'https://images.unsplash.com/photo-1579888944880-d98341245702?w=500',
        description: 'Blended coffee with chocolate sauce',
        type: 'frappe'
    },
    {
        name: 'Pour Over Coffee',
        price: 'Rp 28.000',
        img: 'https://images.unsplash.com/photo-1447933601403-07fcbe16d735?w=500',
        description: 'Hand-brewed coffee with care',
        type: 'brewed'
    },
    {
        name: 'Chocolate Croissant',
        price: 'Rp 22.000',
        img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500',
        description: 'Croissant filled with chocolate',
        type: 'bread'
    },
    {
        name: 'Vanilla Latte',
        price: 'Rp 33.000',
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
        description: 'Espresso with vanilla syrup and steamed milk',
        type: 'espresso'
    },
    {
        name: 'Matcha Green Tea Latte',
        price: 'Rp 35.000',
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500',
        description: 'Premium matcha with steamed milk',
        type: 'tea'
    },
    {
        name: 'Blueberry Muffin',
        price: 'Rp 25.000',
        img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500',
        description: 'Fresh baked muffin with blueberries',
        type: 'bread'
    },
    {
        name: 'Cold Brew',
        price: 'Rp 34.000',
        img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500',
        description: 'Smooth cold brewed coffee',
        type: 'brewed'
    },
    {
        name: 'Tiramisu',
        price: 'Rp 28.000',
        img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
        description: 'Classic Italian coffee-flavored dessert',
        type: 'dessert'
    },
    {
        name: 'Caramel Macchiato',
        price: 'Rp 36.000',
        img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500',
        description: 'Espresso with vanilla and caramel',
        type: 'espresso'
    },
    {
        name: 'Chocolate Chip Cookie',
        price: 'Rp 18.000',
        img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500',
        description: 'Fresh baked chocolate chip cookie',
        type: 'bread'
    },
    {
        name: 'Hazelnut Latte',
        price: 'Rp 34.000',
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
        description: 'Espresso with hazelnut syrup and milk',
        type: 'espresso'
    },
    {
        name: 'Chocolate Cake',
        price: 'Rp 32.000',
        img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
        description: 'Rich chocolate cake with ganache',
        type: 'dessert'
    },
    {
        name: 'Cinnamon Roll',
        price: 'Rp 26.000',
        img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
        description: 'Fresh baked cinnamon roll with icing',
        type: 'bread'
    }
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
