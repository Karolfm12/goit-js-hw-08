import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';
// import SimpleLightbox from '../../node_modules/simplelightbox/dist/simple-lightbox.min';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const ulGallery = document.querySelector('.gallery');
const liGallery = galleryItems
  .map(
    item =>
      `<li><a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></li>`
  )
  .join('');
ulGallery.innerHTML = liGallery;

const lightBox = new SimpleLightbox('.gallery li a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
