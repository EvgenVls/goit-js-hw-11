import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from './img/icon-error.png';

export default searchImages;

const searchParams = new URLSearchParams({
    key: '42601887-7c2d316803b73c9107fd5176e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
})

function searchImages(tagImage) {
    const url = `https://pixabay.com/api/?${searchParams}&q=${tagImage}`;
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.blob();
    })
    .then(data => console.log(data))
    .catch((error) => console.log(error))
}