const renderTvCards = (data) => {
  const tvContainer = document.querySelector('.tvshows');
  const scoreDetails = document.createElement('div');
  scoreDetails.classList.add('tvcard');
  scoreDetails.innerHTML = `<img class ="tvimage"src = ${data.image.original}>
 <div class="tvtitles">
     <h2 class="title"> ${data.name}</h2>
 <button class="likebtn"><i class="fa fa-heart-o" id="love"></i></button>
 </div>
 <div class="tvarticle">
     <p class="like">2 likes</p>
 <button class="comment">Comment</button>
 </div>
      `;
  tvContainer.append(scoreDetails);
};
export default renderTvCards;
