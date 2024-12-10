// Animation and interactivity for love message
document.getElementById("show-message-btn").addEventListener("click", function() {
  // Hide the button after it is clicked
  this.style.display = "none";
  
  // Hide the greeting message
  const greeting = document.querySelector(".greeting");
  greeting.style.display = "none";  // Hide the greeting message

  // Fade in the love message
  const loveMessage = document.getElementById("love-message");
  loveMessage.style.display = "block";
  loveMessage.style.animation = "fadeIn 2s";
});

// Fade-in animation for the love message
document.styleSheets[0].insertRule(`
  @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
  }
`, document.styleSheets[0].cssRules.length);
