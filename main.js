const canvasContainer = document.getElementById('canvas-container');
const formTyping = document.getElementById('forming_typing');
const formResult = document.getElementById('forming_result');
const errorMessage = document.getElementById('error-message');
const nameInput = document.getElementById('name');
const downloadLink = document.getElementById('download-link');
const playAgain = document.getElementById('play_again');



function drawCanvasImage() {
  showButton.disabled = true;
  setTimeout(function() {
    showButton.disabled = false;
  }, 1000); // Change this delay as needed

  // Create a new canvas element
  const canvas = document.createElement('canvas');


  // Create a new canvas context
  const ctx = canvas.getContext('2d');

  // Load an image onto the canvas
  const img = new Image();
  img.src = './tahnia.png';
  img.crossOrigin = 'anonymous'; // set the crossorigin attribute to enable CORS

  img.onload = () => {
    const aspectRatio = img.width / img.height;

    // Set the size of the canvas element
    canvas.width = 800;
    canvas.height = canvas.width / aspectRatio;

    // Create a new canvas context
    const ctx = canvas.getContext('2d');

    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Add some text to the canvas
    ctx.font = '900 40px Alexandria ';
    ctx.fillStyle = '#501d1b';

    const text =  nameInput.value;
    const textWidth = ctx.measureText(text).width;
    const textHeight = parseInt(ctx.font);
    const x = canvas.width / 2 - textWidth / 2;
    const y = canvas.height - textHeight - 135;
    ctx.fillText(text, x, y);

    formTyping.style.display = 'none';
    formResult.style.display = 'block';
    // Add the canvas to the container
    canvasContainer.appendChild(canvas);

    downloadLink.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'عيدية التهامي.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });


  };
}

const showButton = document.querySelector('.show_btn');
showButton.addEventListener('click', () => {
    
    const name = nameInput.value;
  
    if (name.trim() === '') {
       
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 2500);
    } else {
      errorMessage.style.display = 'none';
      drawCanvasImage();
    }
});

playAgain.addEventListener('click', () => {
    
    formTyping.style.display = 'block';
    formResult.style.display = 'none';
    nameInput.value = '';
    canvasContainer.innerHTML = '';

});