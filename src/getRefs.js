export default function getRefs() {
    return {
        form: document.querySelector('.form'),
        input: document.querySelector('#search-box'),
        button: document.querySelector('.search-container_button'),
        imagesList: document.querySelector('.gallery'),
        loadMoreButton: document.querySelector('.load-more'),
    };
}