// Display current year
document.getElementById('year').textContent = new Date().getFullYear();

// Save item (demo)
function saveItem(id) {
  alert('Saved to your favorites (demo). Replace this with real save logic or wishlist storage.');
}

// Subscribe (demo)
function subscribe(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert('Thanks! ' + email + ' has been added to TopSave Trend deal alerts (demo). Replace form action with real endpoint.');
  document.getElementById('email').value = '';
}

// Optional: fetch live deals dynamically (future API integration)
