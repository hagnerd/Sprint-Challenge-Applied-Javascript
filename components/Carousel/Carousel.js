class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = element.querySelector(".left-button");
    this.rightBtn = element.querySelector(".right-button");

    this.images = element.querySelectorAll("img");

    this.selectedImage = 0;

    this.selectImage();

    this.leftBtn.addEventListener("click", () => this.leftClick());
    this.rightBtn.addEventListener("click", () => this.rightClick());
  }

  leftClick() {
    if (this.selectedImage === 0) {
      this.selectedImage = this.images.length - 1;
    } else {
      this.selectedImage -= 1;
    }

    this.selectImage();
  }
  rightClick() {
    if (this.selectedImage === this.images.length - 1) {
      this.selectedImage = 0;
    } else {
      this.selectedImage += 1;
    }
    this.selectImage();
  }
  selectImage() {
    this.images.forEach((img, i) => {
      if (i === this.selectedImage) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  }
}

let carousel = document.querySelector(".carousel");
let carouselInstance = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
