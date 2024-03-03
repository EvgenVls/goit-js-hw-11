import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from './img/icon-error.png';
import searchImages from './js/pixabay-api';
import createMarcupGallery from './js/render-functions';


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
    event.preventDefault();
    loader.style.display = 'grid';
    const tagImage = event.target.elements.search.value;
    if (tagImage) {
        form.reset();
        gallery.innerHTML = '';
        searchImages(tagImage)
        .then(data => {
        const arrayImages = data.hits;
        loader.style.display = 'none';
        if (arrayImages.length) {
            gallery.innerHTML = createMarcupGallery(arrayImages);
            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250
            });
            lightbox.refresh();
        } else {
            iziToast.error({
                iconUrl: iconError,
                message: 'Sorry, there are no images matching your search query. Please try again!',
                maxWidth: '432px',
                position: 'topRight',
                messageSize: 16,
                backgroundColor: '#ef4040',
                titleColor: '#FFFFFF',
                messageColor: '#FFFFFF',
                theme: 'dark',
            });
            }
    })
    .catch((error) => console.log(error))
    }
})