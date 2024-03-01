export default createMarcupGallery;

function createMarcupGallery(images) {
  return images.map(({webformatURL, largeImageURL, tags}) => 
        `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
            </a>
        </li>`).join('')
};

