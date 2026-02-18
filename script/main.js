// Prevent double-tap zoom on buttons
document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.icon-btn, .link-card, .social-icon')) {
        e.preventDefault();
    }
}, { passive: false });

// Menu button functionality
document.getElementById('menuBtn').addEventListener('click', function() {
    window.location.href = 'https://profilwebsite.vercel.app/';
});

// Share button functionality
document.getElementById('shareBtn').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: '@robin_bibin_',
            text: 'Check out my profile!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Share not supported on this browser');
    }
});
// Social icon functionality (keep simple behaviour)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        // allow normal navigation but log for debug
        console.log('Social clicked:', this.getAttribute('title'));
    });
});

// ----- Paket Satu: WhatsApp order handling -----
// Replace this phone with the admin's WhatsApp number in international format (no +, e.g. 62812...)
const ADMIN_PHONE = '6281234567890';

document.getElementById('sendBtn').addEventListener('click', function() {
    // require form validity before sending
    const orderForm = document.getElementById('orderForm');
    if (orderForm && !orderForm.reportValidity()) {
        return; // browser will show validation UI
    }

    const name = document.getElementById('customerName').value.trim();
    const note = document.getElementById('note').value.trim();

    const packageName = 'Paket Satu';
    const packageDesc = 'Foto sepuasnya';
    const price = 'Rp.20.000';

    let message = `Pesanan ${packageName}\n${packageDesc}\nHarga: ${price}`;
    if (name) message += `\nNama: ${name}`;
    if (note) message += `\nCatatan: ${note}`;
    message += `\nLink halaman: ${window.location.href}`;

    const url = `https://wa.me/${"081249132140"}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat in a new tab/window
    window.open(url, '_blank');
});

// Responsive orientation change handler
window.addEventListener('orientationchange', function() {
    document.body.style.opacity = '0.5';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
});

// Handle viewport resize for smooth transitions
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        console.log('Viewport resized');
    }, 250);
});