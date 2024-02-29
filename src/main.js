import searchImages from './js/pixabay-api';
import showGallery from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const tagImage = event.target.elements.search.value;
    if (tagImage) {
        form.reset();
        console.log(tagImage);
        
        searchImages(tagImage);// запуск функції для відправки запиту на пошук зображень
        // showGallery();// запуск функції побудови галереї
    }
    
})