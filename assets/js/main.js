const slideOne = document.querySelector(".slide__one");
const slideOneImage = document.querySelector(".slide__one-image");
const slideOneHeader = document.querySelector(".slide__one-heading");

const slideTwo = document.querySelector(".slide__two");
const slideTwoLogo = document.querySelector(".slide__two-logo");
const slideTwoHeading = document.querySelector(".slide__two-heading");
const slideTwoSubheading = document.querySelector(".slide__two-subheading");
const slideTwoLearnBtn = document.querySelector(".slide__two-learn-btn");
const slideTwoReplayBtn = document.querySelector(".slide__two-replay-btn");

slideOneImage.addEventListener("animationend", (e) => {
  slideOne.style.display = "none";
});

slideTwoReplayBtn.addEventListener("click", (e) => {
  location.reload();
});
