  const popup = document.getElementById('popup');

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      popup.style.display = 'none';
    }
  });
