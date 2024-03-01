import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import searchImages from './js/pixabay-api';
import createMarcupGallery from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
    event.preventDefault();
    const tagImage = event.target.elements.search.value;
    if (tagImage) {
        form.reset();
        console.log(tagImage);
        
        searchImages(tagImage)
        .then((img) => console.log(img))
        
        // gallery.innerHTML = createMarcupGallery(images);// showGallery();// запуск функції побудови галереї

        // const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250  });
    }
    
})