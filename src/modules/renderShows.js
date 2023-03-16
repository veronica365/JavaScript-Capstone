import commentPop from './commentpopup.js';
import { addLike, updatingLike } from './addLike.js';
import getLike from './getUpdateAPI.js';

const renderTvCards = async (data) => {
  const like = await getLike();
  if (like[data.id - 1].likes === undefined) {
    like[data.id - 1].likes = '0 Likes';
  } else if (like[data.id - 1].likes === '0' || like[data.id - 1].likes === '1') {
    like[data.id - 1].likes = `${like[data.id - 1].likes} Like`;
  } else {
    like[data.id - 1].likes = `${like[data.id - 1].likes} Likes`;
  }

  const tvContainer = document.querySelector('.tvshows');
  const scoreDetails = document.createElement('div');
  scoreDetails.classList.add('tvcard');

  scoreDetails.innerHTML = `<img class ="tvimage"src = ${data.image.original}>
 <div class="tvtitles">
     <h2 class="title"> ${data.name}</h2>
 <button type = "submit"  class="likebtn" id= "${data.name}"><i class="fa fa-heart-o" id="love"></i></button>
 </div>
 <div class="tvarticle">
     <p class="like " id ="${data.id}s"> ${like[data.id - 1].likes}</p>
 <button id="${data.id}" class="comment">Comment</button>
 </div>
      `;

  tvContainer.append(scoreDetails);

  const likebtn = document.getElementById(`${data.name}`);

  likebtn.addEventListener('click', () => {
    addLike(data.name);
    setTimeout(updatingLike, 500, `${data.id}`);
  });
  const popUp = document.getElementById(`${data.id}`);
  popUp.addEventListener('click', () => {
    const modal = document.querySelector('#modal');
    modal.innerHTML = commentPop(data);
    const dialog = document.querySelector('.comment-modal');
    dialog.showModal();
  });
};
export default renderTvCards;
