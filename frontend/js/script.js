<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

const directoryPath = '../images'; // Replace with the actual folder path

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const fileNames = files.filter(file => {
        return fs.statSync(path.join(directoryPath, file)).isFile();
    });

    console.log(fileNames);
});
=======
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
>>>>>>> 2ed4ad59570f03a570d4ca452f86e361a7d830db
