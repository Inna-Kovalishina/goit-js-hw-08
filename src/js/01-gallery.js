// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery')

const makeImageItemMarkup = ({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}

const makeImageGalleryMarkup = galleryItems.map(makeImageItemMarkup).join('');

galleryEl.innerHTML = makeImageGalleryMarkup;

const lightbox = new SimpleLightbox('.gallery a',
  {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
console.log(galleryItems);
