class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = element.querySelector(".left-button");
    this.rightBtn = element.querySelector(".right-button");

    this.images = element.querySelectorAll("img");

    this.selectedImage = 0;

    this.selectImage("left", 0, 3);

    this.leftBtn.addEventListener("click", () => this.leftClick());
    this.rightBtn.addEventListener("click", () => this.rightClick());
  }

  leftClick() {
    let oldImage = this.selectedImage;

    if (oldImage === 0) {
      this.selectedImage = this.images.length - 1;
    } else {
      this.selectedImage -= 1;
    }

    this.selectImage("left", this.selectedImage, oldImage);
  }
  rightClick() {
    let oldImage = this.selectedImage;

    if (oldImage === this.images.length - 1) {
      this.selectedImage = 0;
    } else {
      this.selectedImage += 1;
    }
    this.selectImage("right", this.selectedImage, oldImage);
  }

  selectImage(direction, newIndex, oldIndex) {
    let newImage = this.images[newIndex];
    let oldImage = this.images[oldIndex];

    let oldImageTransition;
    let newImageTransition;

    if (direction === "left") {
      oldImageTransition = 100;
      newImageTransition = -100;
    } else {
      oldImageTransition = -100;
      newImageTransition = 100;
    }

    oldImage.style.transform = `translate3d(${oldImageTransition}%, 0, 0)`;
    oldImage.style.opacity = 0;
    newImage.style.opacity = 0;

    setTimeout(() => {
      oldImage.style.display = "none";
      newImage.style.display = "block";
      newImage.style.transform = `translate3d(${newImageTransition}%, 0, 0)`;
    }, 500);

    setTimeout(() => {
      newImage.style.opacity = 1;
      newImage.style.transform = "";
    }, 600);
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
