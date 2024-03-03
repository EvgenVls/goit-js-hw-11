export default searchImages;

function searchImages(tagImage) {

    const searchParams = new URLSearchParams({
        key: '42601887-7c2d316803b73c9107fd5176e',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    })

    return fetch(`https://pixabay.com/api/?${searchParams}&q=${tagImage}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}