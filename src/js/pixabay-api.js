import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from '../img/icon-error.png';

export default searchImages;

const searchParams = new URLSearchParams({
    key: '42601887-7c2d316803b73c9107fd5176e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
})

function searchImages(tagImage) {
    fetch(`https://pixabay.com/api/?${searchParams}&q=${tagImage}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
        .then(data => {
            const arrayImages = data.hits;
            console.log(arrayImages.length);
        if (arrayImages.length) {
            console.log(arrayImages);
            return arrayImages;
            
        } else {
            iziToast.error({
                iconUrl: iconError,
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: '#ef4040',
                titleColor: '#FFFFFF',
                messageColor: '#FFFFFF',
                theme: 'dark',
            });
            }
           
    })
    .catch((error) => console.log(error))
}