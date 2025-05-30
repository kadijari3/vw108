  const popup = document.getElementById('popup');

  // Handle both mouse click and touch events
  const closePopup = () => {
    popup.style.display = 'none';
  };

  popup.addEventListener('click', closePopup);
  popup.addEventListener('touchstart', closePopup);
