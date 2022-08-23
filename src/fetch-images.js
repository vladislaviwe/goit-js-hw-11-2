import axios from "axios";
import Notiflix from "notiflix";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29393857-621a457e4e6b44715a66c2c62';
const OPTIONS = '&image_type=photo&orientation=horizontal&safesearch=true&';
const PER_PAGE = 39;

async function fetchImages(nameToSearch, page) {
    try {
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}${OPTIONS}q=${nameToSearch}&page=${page}&per_page=${PER_PAGE}`);

        if (page === 1 && response.data.totalHits !== 0) {
            Notiflix.Notify.success(`Hoooray! We found ${response.data.totalHits} images!`);
        }
        if (response.data.totalHits === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        }

        onScroll = function() {
            if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight && PER_PAGE * page >= response.data.totalHits && response.data.totalHits !== 0) 
                Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        };
        return response.data.hits;
    } catch (error) {
        Notiflix.Notify.failure('404 Images not found');
        console.log(error);
    }
}

export default { fetchImages };