document.addEventListener('DOMContentLoaded', () => {
    const colorChoose = document.querySelector('.color-choose');
    const leftColumnImgs = document.querySelectorAll('.left-column img');
    console.log(colorChoose)
    console.log(leftColumnImgs)
  
    colorChoose.addEventListener('click', event => {
      if (!event.target.matches('.color-choose input')) return;
        console.log(event.target.matches('.color-choose input'))  // comprueba cual es el target del evento
      const selectedColor = event.target.dataset.image;
      console.log(event)
  
      leftColumnImgs.forEach(img => {
        const isActive = img.classList.contains('active');
        const shouldBeActive = img.dataset.image === selectedColor;
  
        if (isActive !== shouldBeActive) {
          img.classList.toggle('active');
        }
      });
  
      event.target.classList.add('active');
    });
  });