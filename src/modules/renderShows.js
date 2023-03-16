import commentPop from './commentpopup.js';
import { addLike, updatingLike } from './addLike.js';
import getLike from './getUpdateAPI.js';
import { getComments, postComment } from './commentAPI.js';
import renderUserComment from './comments.js';
import countingFunction from './itemCount.js';

const renderTvCards = async (data) => {
  const like = await getLike();
  if (like[data.id - 1].likes === undefined) {
    like[data.id - 1].likes = '0 Likes';
  } else if (
    like[data.id - 1].likes === '0'
    || like[data.id - 1].likes === '1'
  ) {
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
 <button type = "submit"  class="likebtn" id= "${
  data.name
}"><i class="fa fa-heart-o" id="love"></i></button>
 </div>
 <div class="tvarticle">
     <p class="like " id ="${data.id}s"> ${like[data.id - 1].likes}</p>
 <button id="${data.id}" class="comment">Comment</button>
 </div>
      `;

  tvContainer.append(scoreDetails);
  countingFunction();

  const likebtn = document.getElementById(`${data.name}`);

  likebtn.addEventListener('click', () => {
    addLike(data.name);
    setTimeout(updatingLike, 500, `${data.id}`);
  });
  const popUp = document.getElementById(`${data.id}`);
  popUp.addEventListener('click', async () => {
    const modal = document.querySelector('#modal');
    modal.innerHTML = commentPop(data);
    const dialog = document.querySelector('.comment-modal');
    dialog.showModal();
    const comments = await getComments(data.id);
    renderUserComment(comments);
    const form = document.querySelector('.comment-modal form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = event.target.elements.username.value;
      const comment = event.target.elements.comment.value;
      await postComment({ item_id: `${data.id}`, username, comment });
      const comments = await getComments(data.id);
      renderUserComment(comments);
      event.target.elements.username.value = '';
      event.target.elements.comment.value = '';
    });
  });
};
export default renderTvCards;
