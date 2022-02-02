import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg = document.querySelector('.gallery')

const makeImageMarkup = ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}

const makeGalerryMarkup = galleryItems.map(makeImageMarkup).join('')
containerImg.insertAdjacentHTML('afterbegin', makeGalerryMarkup)


containerImg.addEventListener('click', getUrl)

function getUrl(event) {
    if (event.target.nodeName !== 'IMG') {
        return; 
    }
    event.preventDefault()
    const selectedUrl = event.target.dataset.source;


    const instance = basicLightbox.create(`
        <img src="${selectedUrl}" width="800" height="600">
    `)

    instance.show()
}



console.log(galleryItems);

