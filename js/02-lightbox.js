import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
  // Створення a
  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.href = `${original}`;
  galleryLinkEl.classList.add("gallery__link");

  // Створення img
  const gallerImgEl = document.createElement("img");
  gallerImgEl.classList.add("gallery__image");
  gallerImgEl.src = `${preview}`;
  gallerImgEl.alt = `${description}`;
  galleryLinkEl.append(gallerImgEl);

  return galleryLinkEl;
};

const galleryItemsEl = galleryItems.map((el, idx, arr) => {
  return makeGalleryCard(el);
});

galleryListEl.prepend(...galleryItemsEl);

galleryListEl.addEventListener("click", (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== "IMG") {
    return;
  }
});

// lightbox simple
let gallery = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // do something…
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});
