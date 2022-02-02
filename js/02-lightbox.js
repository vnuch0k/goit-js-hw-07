import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg = document.querySelector('.gallery')

const makeImageMarkup = ({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}


const makeGalerryMarkup = galleryItems.map(makeImageMarkup).join('')
containerImg.insertAdjacentHTML('afterbegin', makeGalerryMarkup)



new SimpleLightbox('.gallery a', {
    captionsData: "alt", captionPosition: "bottom", captionDelay: 250
});

console.log(galleryItems);
