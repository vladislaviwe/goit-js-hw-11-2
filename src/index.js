import './css/styles.css';
import API from './fetch-images';
import getRefs from './getRefs';
import MARKUP from './markup';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = getRefs();
let lightbox;
let page = 1;
let nameToSearch = "";

refs.loadMoreButton.classList.add('invisible');

refs.form.addEventListener('submit', doSearch);
refs.loadMoreButton.addEventListener('click', onLoadMore);

function doSearch(e) {
    e.preventDefault();

    pageClearing();

    if (page > 0) {
        page = 1;
    }

    refs.loadMoreButton.classList.add('invisible');

    nameToSearch = refs.input.value.trim().toLowerCase();

    onFetch();
    
    e.target.reset();
}

function onLoadMore() {

    refs.loadMoreButton.classList.add('invisible');

    lightbox.refresh();

    page += 1;

    onFetch();
}

const insertMarkup = (element) => {
    refs.imagesList.insertAdjacentHTML("beforeend", MARKUP(element));
}

function createMarkup(images) { 
    images.forEach(element => {
            insertMarkup(element);
    });     
}

function pageClearing() {
    if (refs.imagesList.innerHTML !== "") {
        refs.imagesList.innerHTML = "";
    }
} 

function onFetch() {
    API.fetchImages(nameToSearch, page)
    .then(images => {
        createMarkup(images);
        if (images.length === 39) {
            refs.loadMoreButton.classList.remove('invisible');
        }
        lightbox = new SimpleLightbox('.gallery_link', {
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });
    })
}
