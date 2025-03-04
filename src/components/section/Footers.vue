<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <!-- <img src="/logo.png" alt="Logo" class="logo" /> -->
        <p class="footer-description"> Tyan.Dev - We make amazing things.</p>
      </div>
      
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="tel:+123456789">Phone: +123456789</a></li>
          <li><a href="mailto:info@company.com">Email: info@company.com</a></li>
        </ul>
      </div>

      <div class="footer-socials">
        <h4>Follow Us</h4>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" class="social-icon">Facebook</a>
          <a href="https://twitter.com" target="_blank" class="social-icon">Twitter</a>
          <a href="https://instagram.com" target="_blank" class="social-icon">Instagram</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  background-color: #2a2a2a;
  color: #ffffff;
  padding: 40px 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-logo {
  flex: 1;
  max-width: 250px;
}

.footer-logo .logo {
  width: 100px;
  margin-bottom: 10px;
}

.footer-description {
  font-size: 14px;
}

.footer-links, .footer-contact, .footer-socials {
  flex: 1;
  margin: 20px;
}

.footer-links ul, .footer-contact ul {
  list-style: none;
  padding: 0;
}

.footer-links li, .footer-contact li {
  margin: 10px 0;
}

.footer-links a, .footer-contact a {
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}

.footer-links a:hover, .footer-contact a:hover {
  color: #007bff;
}

.footer-socials .social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: #007bff;
}

.footer-bottom {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  background-color: #1f1f1f;
  padding: 10px;
}
</style>
