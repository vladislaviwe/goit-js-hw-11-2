export default cardMarkup = (element) => 
`
<div class="photo-card">
  <a href="${element.largeImageURL}" class="gallery_link">
    <img class="photo-card_img" src="${element.webformatURL}" alt="${element.tags}" height="270px" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes: </b>
      <br>${element.likes}</br>
    </p>
    <p class="info-item">
      <b>Views: </b>
      <br>${element.views}</br>
    </p>
    <p class="info-item">
      <b>Comments: </b>
      <br>${element.comments}</br>
    </p>
    <p class="info-item">
      <b>Downloads: </b>
      <br>${element.downloads}</br>
    </p>
  </div>
</div>  
`