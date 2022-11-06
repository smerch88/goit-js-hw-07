import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");
let imgLink = "";

const makeGalleryCard = ({ preview, original, description } = {}) => {
  // Створення div
  const galleryItemEl = document.createElement("div");
  galleryItemEl.classList.add("gallery__item");

  // Створення a
  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.href = `${original}`;
  galleryLinkEl.classList.add("gallery__link");
  galleryItemEl.append(galleryLinkEl);

  // Створення img
  const gallerImgEl = document.createElement("img");
  gallerImgEl.classList.add("gallery__image");
  gallerImgEl.src = `${preview}`;
  gallerImgEl.dataset.source = `${original}`;
  gallerImgEl.alt = `${description}`;
  galleryLinkEl.append(gallerImgEl);

  return galleryItemEl;
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

  imgLink = target.dataset.source;

  basicLightbox
    .create(
      `
		<img src="${imgLink}" width="800" height="600">
	`
    )
    .show();
});
